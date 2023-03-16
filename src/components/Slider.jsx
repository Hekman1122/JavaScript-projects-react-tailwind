import React, { useState } from "react";
import { sliderImages } from "../asset/Data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider = () => {
  const [nowId, setNowId] = useState(1);
  const sliderLength = sliderImages.length;

  const handleRight = () => {
    const slider = document.querySelector("#slider");
    if (nowId < sliderLength) {
      slider.scrollLeft += 640;
      setNowId((prev) => prev + 1);
    } else {
      slider.scrollLeft = 0;
      setNowId(1);
    }
  };
  const handleLeft = () => {
    const slider = document.querySelector("#slider");
    if (nowId > 1) {
      slider.scrollLeft -= 640;
      setNowId((prev) => prev - 1);
    } else {
      slider.scrollLeft = 640 * sliderLength;
      setNowId(sliderLength);
    }
  };
  return (
    <div className="section-div mt-10">
      {/* upper */}
      <div className="flex justify-center gap-16 items-center">
        <div>
          <AiOutlineLeft
            size={30}
            className="opacity-50 duration-200 hover:opacity-100 cursor-pointer"
            onClick={() => {
              handleLeft();
            }}
          />
        </div>
        {/* slider */}
        <div
          className="bg-amber-200 w-[40rem] h-[20rem] overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide relative"
          id="slider"
        >
          {sliderImages.map((item) => {
            return (
              <div className="inline-block w-full h-full">
                <img
                  src={item.url}
                  alt={item.id}
                  key={item.id}
                  className="w-full h-full max-h-80 object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
        <div>
          <AiOutlineRight
            size={30}
            className="opacity-50 duration-200 hover:opacity-100 cursor-pointer"
            onClick={() => {
              handleRight();
            }}
          />
        </div>
      </div>

      {/* lower */}
      <div className="flex gap-10 justify-center items-center mt-5">
        <div
          className={`${
            nowId === 1 ? "bg-gray-500" : null
          } w-4 h-4 border-2 rounded-full border-gray-500 cursor-pointer duration-200`}
        ></div>
        <div
          className={`${
            nowId > 1 && nowId <= Math.floor(sliderLength / 2)
              ? "bg-gray-500"
              : null
          } w-4 h-4 border-2 rounded-full border-gray-500 cursor-pointer duration-200`}
        ></div>
        <div
          className={`${
            nowId > sliderLength / 2 && nowId < sliderLength
              ? "bg-gray-500"
              : null
          } w-4 h-4 border-2 rounded-full border-gray-500 cursor-pointer duration-200`}
        ></div>
        <div
          className={`${
            nowId === sliderLength ? "bg-gray-500" : null
          } w-4 h-4 border-2 rounded-full border-gray-500 cursor-pointer duration-200`}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
