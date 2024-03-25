import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { QuestionContext } from "../store/Question";

export const useSubmit = () => {
  const [loading, setLoading] = useState(false);

  const { question } = useContext(QuestionContext);
  const { quesOption } = useContext(QuestionContext);
  const { score, setScore } = useContext(QuestionContext);
  const topic = question[0]?.topic;

  const submitFun = async () => {
    setLoading(true);
    const answer = quesOption;
    console.log(answer);
    await axios
      .post(
        `https://quiz-app-c179.onrender.com/api/v1/question/compare/${topic}`,
        { answer },
      )
      .then((response) => {
        toast.success(response.data.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setScore(response.data.correct);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { submitFun, submitLoading: loading };
};
