import express from 'express';
import HelloController from './helloController';

const router = express.Router();

router.route('/').get(HelloController.sayHello);

const HelloRoutes = router;
export default HelloRoutes;
