import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { QuestionContext } from "../store/Question";

export const useQuestion = () => {
  const [loading, setLoading] = useState(false);
  const { question, setQuestion } = useContext(QuestionContext);

  const getQuestion = async (topic) => {
    setLoading(true);
    await axios
      .get(`/api/v1/question/getquestion/${topic}`)
      .then((response) => {
        // console.log(response.data.questions);
        if (response.data.questions.length === 0) {
          toast.error("No questions found", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }

        setQuestion(response.data.questions);

        toast.success(response.data.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
    setLoading(false);
  };

  return {
    getQuestion,
    loading,
  };
};
