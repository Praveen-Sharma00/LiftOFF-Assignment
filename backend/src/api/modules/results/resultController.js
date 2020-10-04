import { StatusCodes } from 'http-status-codes';

import QuestionModel from '../../../models/Question';

import catchAsync from '../../../utils/catchAsync';

const generateExamResult = catchAsync(async (req, res, next) => {
  if (req.params.examId) {
    let correctAnswerList = await QuestionModel.find({}).select('_id correctIndex').lean();
    let answerList = req.body.answers;
    let result = [];
    for (let i = 0; i < answerList.length; i++) {
      let correctResponse = correctAnswerList.find((e) => e['_id'].toString() === answerList[i]['_id']);
      if (correctResponse) {
        let selectedIndex = parseInt(answerList[i]['selectedIndex'], 10);
        let correctIndex = parseInt(correctResponse['correctIndex'], 10);
        result.push({
          _id: answerList[i]['_id'],
          correct: selectedIndex === correctIndex,
        });
      }
    }
    return res.json({
      mesage: 'Result generated successfully',
      data: {
        result: result,
      },
      code: StatusCodes.OK,
    });
  }

  return res.json({
    mesage: 'No Results found !',
    code: StatusCodes.NOT_FOUND,
  });
});

const ResultController = {
  generateExamResult: generateExamResult,
};
export default ResultController;
