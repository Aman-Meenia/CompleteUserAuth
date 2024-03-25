import React, { useContext, useEffect } from "react";

import Question from "./Question";
import { useQuestion } from "../../hooks/question";
import { QuestionContext } from "../../store/Question";
import { useSubmit } from "../../hooks/submitHook";

const Questions = () => {
  const { loading, getQuestion } = useQuestion();
  const { clicked, setClicked } = useContext(QuestionContext);
  const topic = "DSA";

  const { question, setQuestion, currentQuestion, setCurrentQuestion } =
    useContext(QuestionContext);
  const { submitLoading, submitFun } = useSubmit();

  useEffect(() => {
    const fun = async () => {
      await getQuestion(topic);
    };
    fun();
  }, []);

  const handlePrev = (e) => {
    e.preventDefault();
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setCurrentQuestion(question.length - 1);
    }
    setClicked(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const fun = async () => {
      await submitFun();
    };
    fun();
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
    }
    setClicked(0);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md">
          {question && <Question question={question[currentQuestion]} />}
          <div className="flex justify-between">
            <button onClick={handlePrev} className="btn btn-warning m-2">
              Previous
            </button>
            <button className="btn btn-success m-2" onClick={handleSubmit}>
              {submitLoading ? (
                <span className="loading loading-spinner"> </span>
              ) : (
                "Submit"
              )}
            </button>
            <button onClick={handleNext} className="btn btn-warning m-2">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
