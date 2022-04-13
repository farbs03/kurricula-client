const bcrypt = require("bcryptjs")

exports.register = async (req, res, next) => {
    const { username, password } = req.body
    /*if(password.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters "})
    }*/
    try {
        const NUM_HASHES = 10
        bcrypt.hash(password, NUM_HASHES).then(async (hash) => {
            await (() => {
                //Create User
                if(true)
                    console.log("")
            })().then(user => 
                res.status(200).json({
                    message: "User successfully created",
                    user
                })
            )
        })
    } catch(e){
        res.status(401).json({
            message: "User not successfully created",
            error: e.message
        })
    }
}

exports.login = async (req, res, next) => {
    const { username, password } = req.body
    if(!username || !password) {
        return res.status(400).json({
            message: "Username or Password not present"
        })
    }
    try {
        //const user = get user from DB using username, password
        //if user not exist return 401
        //if user found return 200 with user
    } catch(e){
        res.status(400).json({
            message: "An error occurred",
            error: e.message
        })
    }
}