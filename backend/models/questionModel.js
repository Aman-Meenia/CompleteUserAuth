import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  option1: {
    type: String,
    required: true,
    trim: true,
  },
  option2: {
    type: String,
    required: true,
    trim: true,
  },
  option3: {
    type: String,
    required: true,
    trim: true,
  },
  option4: {
    type: String,
    required: true,
    trim: true,
  },
  topic: {
    type: String,
    required: true,
    trim: true,
  },
  correctAnswer: {
    type: Number,
    enum: [1, 2, 3, 4],
    required: true,
    trim: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
