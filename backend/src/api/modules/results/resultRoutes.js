import express from 'express';

import ResultController from './resultController';
const router = express.Router({ mergeParams: true });

router.route('/').post(ResultController.generateExamResult);

const resultRoutes = router;
export default resultRoutes;
