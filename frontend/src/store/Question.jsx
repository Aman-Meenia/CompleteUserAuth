import { createContext, useState } from "react";

export const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [clicked, setClicked] = useState(0);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState([]);
  const [quesOption, setQuesOption] = useState([0, 0, 0, 0, 0]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <QuestionContext.Provider
      value={{
        clicked,
        setClicked,
        score,
        setScore,
        question,
        setQuestion,
        currentQuestion,
        setCurrentQuestion,
        quesOption,
        setQuesOption,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
