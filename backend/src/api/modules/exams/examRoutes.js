import express from 'express';

import ExamController from './examController';

import questionRoutes from '../questions/questionRoutes';
import resultRoutes from '../results/resultRoutes';

const router = express.Router();

router.route('/').get(ExamController.getAllExams);

router.use('/:examId/questions', questionRoutes);
router.use('/:examId/results', resultRoutes);

const ExamRoutes = router;
export default ExamRoutes;
