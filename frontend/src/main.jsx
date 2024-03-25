import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import QuestionProvider from "./store/Question.jsx";
import UserProvider from "./store/user.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <QuestionProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </QuestionProvider>
  </>,
);
