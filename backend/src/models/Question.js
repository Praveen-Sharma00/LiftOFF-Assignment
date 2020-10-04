import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answers: [
      {
        type: String,
      },
    ],
    correctIndex: {
      type: Number,
    },
  },
  { timestamps: true }
);

const QuestionModel = mongoose.model('Question', questionSchema);
export default QuestionModel;
