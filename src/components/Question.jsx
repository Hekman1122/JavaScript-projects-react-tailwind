import React, { useState } from "react";
import { quizData } from "../asset/Data";
const Question = ({ nowId, setNowId, setCorrect, setWrong }) => {
  const item = quizData[nowId];
  const [flag, setFlag] = useState(null);
  const handleInput = (e) => {
    setFlag(e.target.value);
  };
  const handleButton = () => {
    flag === "true" ? setCorrect((pre) => pre + 1) : setWrong((pre) => pre + 1);
    setFlag(null);
    setNowId((pre) => pre + 1);
  };
  return (
    <div
      className="w-[36rem]  border px-10 py-8 bg-stone-100 rounded-md"
      key={item.id}
    >
      <h2 className="text-xl font-semibold">
        {`${nowId + 1}. ` + item.question}
      </h2>
      <div>
        {item.answers.map((answer, i) => {
          return (
            <div
              className="flex items-center gap-2 mt-4 px-8"
              key={item.id + `-${i}`}
            >
              <input
                type="radio"
                value={answer.isCorrect}
                name="answer"
                id={item.id + `-${i}`}
                onClick={(e) => {
                  handleInput(e);
                }}
              />
              <label htmlFor={item.id + `-${i}`} className="text-lg">
                {answer.answer}
              </label>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-end ">
        <button
          type="button"
          className={`${
            flag === null
              ? "opacity-50 cursor-not-allowed"
              : "opacity-70 hover:opacity-100"
          } bg-black text-white px-8 py-4 rounded-md  duration-300`}
          disabled={flag === null ? true : false}
          onClick={() => {
            handleButton();
          }}
        >
          {nowId === quizData.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Question;
