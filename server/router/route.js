import {Router} from 'express'
import * as controller from '../controller/appController.js'

const router = Router();

/** POST : POST requests are used to send data to the API server and crearte or update a resources. */
router.route('/register').post(controller.register);
router.route('/login').post(controller.login);
router.route('/getblog').get(controller.getblog);
router.route('/postblog').post(controller.postblog);
router.route('/editblog').put(controller.editblog);
router.route('/deleteblog').delete(controller.deleteblog);


export default router;