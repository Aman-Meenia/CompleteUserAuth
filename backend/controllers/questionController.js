import Question from "../models/questionModel.js";

// <------------------------------- Add Question ------------------------------>
export const addQuestion = async (req, res) => {
  try {
    const {
      question,
      option1,
      option2,
      option3,
      option4,
      correctAnswer,
      topic,
    } = req.body;
    if (
      !question ||
      !option1 ||
      !option2 ||
      !option3 ||
      !option4 ||
      !correctAnswer ||
      !topic
    ) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const existedQuestion = await Question.findOne({ question });
    if (existedQuestion) {
      return res.status(400).json({
        status: false,
        message: "Question already exists",
      });
    }

    const newQuestion = new Question({
      question,
      option1,
      option2,
      option3,
      option4,
      topic,
      correctAnswer,
    });
    await newQuestion.save();
    return res.status(200).json({
      status: true,
      message: "Question added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

// <-------------------------------- Get Question ------------------------------>

export const getQuestion = async (req, res) => {
  try {
    const { topic } = req.params;

    const questions = await Question.find(
      { topic: topic },
      {
        question: 1,
        option1: 1,
        option2: 1,
        option3: 1,
        option4: 1,
        topic: 1,
      },
    ).sort({ question: 1 });
    return res.status(200).json({
      status: true,
      message: "Questions fetched successfully",
      questions,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

// <---------------------------Compare Answer-------------------------->
export const compareAnswer = async (req, res) => {
  try {
    const { answer } = req.body;
    const { topic } = req.params;
    if (!topic || !answer || answer.length === 0) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }
    const Answers = await Question.find(
      { topic: topic },
      {
        correctAnswer: 1,
      },
    ).sort({ question: 1 });

    let correct = 0;

    for (let i = 0; i < Answers.length; i++) {
      if (Answers[i].correctAnswer === answer[i]) {
        correct++;
      }
    }
    return res.status(200).json({
      status: true,
      message: "Answers fetched successfully",
      correct,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};
