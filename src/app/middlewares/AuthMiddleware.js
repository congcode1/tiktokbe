const jwtHelper = require('../../utiles/jwtHelper');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'bestdaxua20gg';

const isAuth = async (req, res, next) => {
    const tokenFromClient =
        req.body.token || req.query.token || req.headers['x-access-token'];

    if (tokenFromClient) {
        try {
            const decoded = await jwtHelper.verifyToken(
                tokenFromClient,
                accessTokenSecret,
            );
            req.jwtDecoded = decoded;
            next();
        } catch (error) {
            return res.status(401).json({
                message: 'Unauthorize!!!',
            });
        }
    } else {
        return res.status(403).json({
            message: 'No token provided.',
        });
    }
};

module.exports = { isAuth };
