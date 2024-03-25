import React, { useContext, useState } from "react";
import { QuestionContext } from "../../store/Question";

const Option = ({ option, val }) => {
  const { clicked, setClicked } = useContext(QuestionContext);
  const { currentQuestion, quesOption, setQuesOption } =
    useContext(QuestionContext);

  const handleCnt = (value) => {
    // setClicked(value);
    setQuesOption(
      quesOption.map((item, index) =>
        index === currentQuestion ? value : item,
      ),
    );
  };

  return (
    <>
      <button
        value={quesOption[currentQuestion]}
        onClick={() => handleCnt(val)}
        className={`
${quesOption[currentQuestion] === val && "bg-green-600 text-black"}
font-bold
               btn btn-outline text-start overflow-hidden
hover:bg-green-600
text-red
`}
      >
        {option}
      </button>
    </>
  );
};

export default Option;
