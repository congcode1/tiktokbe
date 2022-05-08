
class VideoController {
    index(req, res, next) {
        res.render("video/index")
    }
    create(req, res, next) {
        console.log(req.body)
        res.send('create video api')
    }
}

export default new VideoController()