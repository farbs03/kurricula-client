const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { usePath } = require("./req/reqMap")

const { prisma } = require("./dbHandler")

const NUM_HASHES = 10

exports.register = async (req, res, next) => {
    const { email, password, firstName, lastName, school } = req.body
    if(!email || !password) {
        return res.status(401).json({
            message: "Email or password not present"
        })
    }
    if(!school){
        return res.status(409).json({
            message: "School field not present"
        })
    }

    try {
        const currentUser = await prisma.user.findUnique({
            where: {
                Email: email.toLowerCase(),
            }
        })
        if(currentUser){
            return res.status(409).json({
                message: "User with email already exists"
            })
        }

        const encryptedPass = await bcrypt.hash(password, NUM_HASHES)

        const data = {
            Email: email.toLowerCase(),
            Password: encryptedPass,
            School: school
        }
        if(firstName)
            data.FirstName = firstName
        if(lastName)
            data.LastName = lastName

        const user = await prisma.user.create({
            data: data
        })

        const token = jwt.sign(
            { email: email.toLowerCase() },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        
        await prisma.user.update({
            where: {UserId: user.UserId},
            data: {Token: token}
        })
        return res.status(200).json({
            token: token
        })

    } catch(e){
        console.log(e.message)
        return res.status(409).json({
            message: "User was unable to be created"
        })
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    if(!email || !password) {
        return res.status(401).json({
            message: "Email or password not present"
        })
    }
    try {
        bcrypt.hash(password, NUM_HASHES).then(async (hash) => {
            const user = await prisma.user.findUnique({
                where: {
                    Email: email.toLowerCase()
                }
            })
            if(!user || !(await bcrypt.compare(password, user.Password))){
                return res.status(401).json({
                    message: "Incorrect email or password"
                })
            }
            const token = jwt.sign(
                { email: email.toLowerCase() },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            await prisma.user.update({
                where: {UserId: user.UserId},
                data: {Token: token}
            })
            return res.status(200).json({
                token: token
            })
        })
    } catch(e){
        console.log(e.message)
        return res.status(409).json({
            message: "An error occurred"
        })
    }
}

exports.api = async (req, res, next) => {
    const { token, data } = req.body
    if(!token || !data || !data.path){
        return res.status(401).json({
            message: "Request invalid"
        })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async function(err, decoded){
        if(err){
            if(err.name==="TokenExpiredError"){
                return res.status(401).json({
                    message: "Token expired"
                })
            } else {
                return res.status(401).json({
                    message: "Invalid token"
                })
            }
        } else {
            return usePath(decoded, data, req, res, next)
        }
    })
}