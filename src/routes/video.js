import express from 'express'
const router = express.Router()

import videoController from '../app/controllers/VideoController.js'

router.get('/', videoController.index)
router.post('/create', videoController.create)

export default router