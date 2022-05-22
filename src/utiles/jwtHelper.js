import jwt from 'jsonwebtoken';

const generateToken = function (user, secretSignature, tokenLife) {
    return new Promise((resolve, reject) => {
        const userData = {
            _id: user._id,
            name: user.name,
            email: user.email,
        };
        jwt.sign(
            { data: userData },
            secretSignature,
            { algorithm: 'HS256', expiresIn: tokenLife },
            (error, token) => {
                if (error) {
                    return reject(error);
                }
                resolve(token);
            },
        );
    });
};

const verifyToken = function (token, secretKey) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decode) => {
            if (error) {
                return reject(error);
            }
            resolve(decode);
        });
    });
};

const jwtHelper = {
    generateToken,
    verifyToken,
};

export default jwtHelper;
