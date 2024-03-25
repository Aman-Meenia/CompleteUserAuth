import React from "react";
import Option from "./Option";

const Options = ({ question }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <Option option={question.option1} val={1} />
        <Option option={question.option2} val={2} />
        <Option option={question.option3} val={3} />
        <Option option={question.option4} val={4} />
      </div>
    </>
  );
};

export default Options;
