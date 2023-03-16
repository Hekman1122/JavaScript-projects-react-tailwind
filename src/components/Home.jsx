import React from "react";

const Home = () => {
  return (
    <div className="section-div">
      <div className="p-10">
        <h1 className="font-bold text-xl tracking-wide text-center">
          3 Javascript Projects Every Beginner Should Build By React and
          Tailwind.
        </h1>
        <p className="text-end my-4">
          reference :
          <a
            href="https://www.youtube.com/watch?v=uDeb2iwZMkA"
            target="_blank"
            className="font-semibold text-amber-700 ml-4 underline"
            rel="noreferrer"
          >
            Lama Dev
          </a>
        </p>

        <div className="flex justify-center items-center text-xl ">
          <ul>
            <li>Slider</li>
            <li className="my-4">Quiz Game</li>
            <li>Filter and search</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
