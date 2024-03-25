import React from "react";
import Navbar from "./Navbar";
import StartPage from "./StartPage";
import Question from "./Question/Question";
import Questions from "./Question/Questions";

const Home = () => {
  return (
    <>
      <Navbar />
      <Questions />
    </>
  );
};

export default Home;
