import React, { useState } from "react";

import Question from "./Question";
const Quiz = () => {
  const [nowId, setNowId] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const tryAgain = () => {
    setNowId(0);
    setCorrect(0);
    setWrong(0);
  };
  return (
    <div className="section-div mt-8">
      <div className="flex justify-center items-center">
        {/* game */}
        {correct + wrong === 10 ? (
          <div className="w-[36rem] border px-10 py-8 bg-stone-100 rounded-md">
            <h1 className="text-2xl font-semibold tracking-wider my-4">
              Congratulation !
            </h1>
            <div className="px-6">
              <p className="text-lg my-4">
                correct :
                <span className="text-green-700 ml-2 font-bold">{correct}</span>{" "}
              </p>
              <p className="text-lg my-4">
                wrong :
                <span className="text-red-600 ml-2 font-bold">{wrong}</span>{" "}
              </p>
            </div>

            <div className="mt-4 flex justify-end ">
              <button
                type="button"
                className="px-8 py-4 bg-black text-white opacity-60 hover:opacity-100 duration-200 rounded-md"
                onClick={() => {
                  tryAgain();
                }}
              >
                Try again
              </button>
            </div>
          </div>
        ) : (
          <Question
            nowId={nowId}
            setNowId={setNowId}
            setCorrect={setCorrect}
            setWrong={setWrong}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
