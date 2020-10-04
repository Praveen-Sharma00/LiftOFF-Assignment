import { StatusCodes } from 'http-status-codes';

import QuestionModel from '../../../models/Question';

import catchAsync from '../../../utils/catchAsync';

const getAllQuestions = catchAsync(async (req, res, next) => {
  if (req.params.examId) {
    let questionList = await QuestionModel.find({}).select('_id question answers').lean();
    if (questionList.length > 0) {
      return res.json({
        mesage: 'Questions successfully found',
        data: {
          questions: questionList,
        },
        code: StatusCodes.OK,
      });
    }
  }

  return res.json({
    mesage: 'No Questions found !',
    code: StatusCodes.NOT_FOUND,
  });
});

const QuestionController = {
  getAllQuestions: getAllQuestions,
};
export default QuestionController;
