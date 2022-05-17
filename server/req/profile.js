const { prisma } = require("../dbHandler")

exports.profile = async (decoded, data, req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                Email: decoded.email.toLowerCase()
            }
        })
        return res.status(200).json({
            email: user.Email,
            school: user.School,
            firstName: user.FirstName,
            lastName: user.LastName
        })
    } catch(e){
        console.log(e.message)
        return res.status(406).json({
            message: "Could not fetch data"
        })
    }
}