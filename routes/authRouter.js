import express from 'express'
const router = express.Router()
import {reg,log,up} from '../controllers/authController.js'

router.route('/reg').post(reg)
router.route('/log').post(log)
router.route('/up').post(up)

export default router