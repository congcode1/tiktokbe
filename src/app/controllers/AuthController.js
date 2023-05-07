import apiResponse from '../../utiles/apiResponse.js';
import jwtHelper from '../../utiles/jwtHelper.js';
import Account from '../models/Account.js';

const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || '1h';
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'bestdaxua20gg';
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || '3650d';
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || 'bestdaxua15gg';

class AuthController {
    // [GET] /videos
    async login(req, res, next) {
        try {
            const instance = new Account();
            instance.username = req.body.email;
            instance.name = req.body.name;
            if (!instance.username) {
                return res.json(apiResponse(0, null, 'no user provide'));
            }
            instance.save(function (err) {
                //
            });
            const accessToken = await jwtHelper.generateToken(
                instance,
                accessTokenSecret,
                accessTokenLife,
            );
            const refreshToken = await jwtHelper.generateToken(
                instance,
                refreshTokenSecret,
                null,
            );
            return res.json(
                apiResponse(1, { accessToken, refreshToken }, 'login ok'),
            );
        } catch (error) {
            return res.json(apiResponse(-1, error, 'login fail'));
        }
    }

    async refreshToken(req, res, next) {
        try {
            const refreshTokenFromClient = req.body.refreshToken;
            const decoded = await jwtHelper.verifyToken(
                refreshTokenFromClient,
                refreshTokenSecret,
            );
            const userFakeData = decoded.data;

            const accessToken = await jwtHelper.generateToken(
                userFakeData,
                accessTokenSecret,
                accessTokenLife,
            );
            // return res.status(200).json({ accessToken });
            return res.json(apiResponse(1, { accessToken }, 'refreshToken ok'));
        } catch (error) {
            res.status(403).json({
                message: 'Invalid refresh token.',
            });
        }
    }
}

export default new AuthController();
