const jwt = require('jsonwebtoken')
// const models = require('./../../../models')

const generateToken = (payload) => {
    try {
        let token = jwt.sign(payload, process.env.JWT_TOKEN_KEY.replace(/\\n/gm, '\n'), {
            expiresIn: '2d'
        })
        return token
    } catch (error) {
        console.error(error,"Error on generating Token");
    }
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        try {
            let payload = jwt.verify(token, process.env.JWT_TOKEN_KEY)
            resolve(payload);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports= { generateToken, verifyToken }