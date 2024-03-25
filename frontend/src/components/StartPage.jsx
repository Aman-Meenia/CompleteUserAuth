import React from "react";

const StartPage = () => {
  return (
    <>
      <section className={`flex flex-col gap-12`}>
        <h1 className={`flex flex-col items-start text-color`}>
          <span className="HeadingLRegular">Welcome to the</span>
          <span className={` HeadingLBold`}>Quiz App!</span>
        </h1>
        <p className={`BodyS text-color2`}>Pick a subject to get started.</p>
      </section>

      <button
        className="style_shadow__Nc090 style_selected__Igkwb style_button__OM2PR text-color relative multiple-selection-color rounded-3xl HeadingS py-[18x] px-[20px] flex items-center gap-8 w-full max-w-[564px] min-h-[92px] h-full border-3
  "
      >
        {" "}
        button
      </button>
    </>
  );
};

export default StartPage;
