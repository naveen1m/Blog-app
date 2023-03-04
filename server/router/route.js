import {Router} from 'express'
import * as controller from '../controller/appController.js'

const router = Router();

/** POST : POST requests are used to send data to the API server and crearte or update a resources. */
router.route('/register').post(controller.register);
router.route('/login').post();
router.route('/getblog').get();
router.route('/postblog').post();
router.route('/editblog').put();
router.route('/deleteblog').delete();


export default router;