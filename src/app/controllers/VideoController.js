import Account from '../models/Account.js';

class VideoController {
    // [GET] /videos
    index(req, res, next) {
        res.render('video/index');
    }

    //[POST] /videos/create
    create(req, res, next) {
        console.log(req.body);
        const instance = new Account();
        instance.username = 'Cong';
        instance.save(function (err) {
            //
        });
        res.send('create video api');
    }
}

export default new VideoController();
