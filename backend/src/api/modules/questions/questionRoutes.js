import express from 'express';
import QuestionController from './questionController';
const router = express.Router({ mergeParams: true });

router.route('/').get(QuestionController.getAllQuestions);

const questionRoutes = router;
export default questionRoutes;
