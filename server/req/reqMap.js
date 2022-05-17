const { profile } = require("./profile")

exports.usePath = (decoded, data, req, res, next) => {
    switch(data.path) {
        case 'profile':
            profile(decoded, data, req, res, next)
    }
}