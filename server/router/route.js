import {Router} from 'express'
import multer from 'multer';
import * as controller from '../controller/appController.js'

const router = Router();
const updloadmiddleware = multer({dest: 'uploads/'})


/** POST : POST requests are used to send data to the API server and crearte or update a resources. */
router.route('/register').post(controller.register);
router.route('/profile').get(controller.profile);
router.route('/login').post(controller.login);
router.route('/postblog').post(updloadmiddleware.single('file'),controller.postblog);
router.route('/getblog').get(controller.getblog);
router.route('/blogpage/:id').get(controller.blogpage)
router.route('/editblog').put(updloadmiddleware.single('file'), controller.editblog);
router.route('/deleteblog/:id').delete(controller.deleteblog);


export default router;