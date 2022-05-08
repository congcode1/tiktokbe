import videoRouter from './video.js'

function route(app) {
    app.use('/videos', videoRouter)
}

export default route