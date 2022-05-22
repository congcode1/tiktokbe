import videoRouter from './video.js';
import authRouter from './auth.js';

function route(app) {
    app.use('/videos', videoRouter);
    app.use('/auth', authRouter);
}

export default route;
