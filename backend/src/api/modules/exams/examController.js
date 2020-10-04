const getAllExams = (req, res, next) => {
  return res.json({
    mesage: 'All Exams',
    code: 200,
  });
};

const ExamController = {
  getAllExams: getAllExams,
};
export default ExamController;
