import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "../store/user";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const login = async ({ userName, password }) => {
    userName = userName.trim();
    password = password.trim();

    if (!userName || !password) {
      toast.error("All fields are required", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    // console.log(import.meta.env.VITE_API_URL);
    setLoading(true);
    await axios
      .post("https://quiz-app-c179.onrender.com/api/v1/user/login", {
        userName,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.loggedInUser),
        );
        setUser(response.data.loggedInUser);

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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, login };
};
