import React, { useContext, useState } from "react";
import Options from "../options/Options";
import { QuestionContext } from "../../store/Question";

const Question = ({ question }) => {
  const [clicked, setClicked] = useState(0);
  const { currentQuestion } = useContext(QuestionContext);
  const handleCnt = (value) => {
    setClicked(value);
  };

  return (
    <>
      <h1 className="border-b-2 m-5 text-3xl font-bold text-blue-700 p-2">
        {question?.topic} Quiz
      </h1>

      <h1 className="text-xl font-bold mb-8 text-center text-black">
        <span> {currentQuestion + 1}. </span>
        {question?.question}
      </h1>

      {/*Options*/}
      {question && <Options question={question} />}
    </>
  );
};

export default Question;
