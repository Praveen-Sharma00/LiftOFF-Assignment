// import QuestionModel from '../../../models/Question';
// import fs from 'fs';
const sayHello = async (req, res) => {
  // let tempData = fs.readFileSync(`${appRoot}/data/quiz.json`, 'utf-8');

  // let data = JSON.parse(tempData);
  // await QuestionModel.insertMany(data['questions']);
  return res.json({
    message: 'Hello world !',
    code: 200,
  });
};

const HelloController = {
  sayHello: sayHello,
};

export default HelloController;
