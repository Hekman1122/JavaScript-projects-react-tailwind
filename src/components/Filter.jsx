import React, { useState } from "react";
import { filterProduct } from "../asset/Data";
import { motion } from "framer-motion";
const Filter = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [search, setSearch] = useState(null);
  const [cate, setCate] = useState("all");

  //debounce
  function debounce(func, delay) {
    let timerId;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRange = (e) => {
    setRangeValue(e.target.value);
  };
  const debouncedSearch = debounce(handleSearch, 500);
  const debounceRange = debounce(handleRange, 500);
  const renderProduct = (category, price, search) => {
    let p =
      category === "all"
        ? filterProduct.filter((pp) => pp.price >= price)
        : filterProduct
            .filter((pro) => pro.category === category)
            .filter((pp) => pp.price >= price);
    let renderP = search ? p.filter((ppp) => ppp.title.includes(search)) : p;
    return renderP;
  };
  return (
    <div className="section-div mt-4">
      {/* search and filter bar */}
      <div className="h-12 bg-slate-600 text-gray-200 rounded-md flex justify-around items-center">
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 bg-slate-600 text-white border border-white rounded-lg"
          onChange={(e) => {
            debouncedSearch(e);
          }}
        />
        <ul className="flex items-center gap-6 font-semibold">
          <li
            className={`${
              cate === "all" ? "text-green-400" : ""
            } cursor-pointer tracking-wide`}
            onClick={() => {
              setCate("all");
            }}
          >
            All
          </li>
          <li
            className={`${
              cate === "furniture" ? "text-green-400" : ""
            } cursor-pointer tracking-wide`}
            onClick={() => {
              setCate("furniture");
            }}
          >
            Furniture
          </li>
          <li
            className={`${
              cate === "machine" ? "text-green-400" : ""
            } cursor-pointer tracking-wide`}
            onClick={() => {
              setCate("machine");
            }}
          >
            Machine
          </li>
        </ul>
        <div className="flex items-center">
          <input
            type="range"
            min="0"
            max="1500"
            className="mr-2"
            onChange={(e) => {
              debounceRange(e);
            }}
          />
          {rangeValue && <p>{rangeValue}</p>}
        </div>
      </div>
      {/* product */}
      <motion.div
        layout
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 gap-8 mt-4 p-8 justify-items-center"
      >
        {renderProduct(cate, rangeValue, search)?.map((p) => {
          return (
            <div
              className="w-80 flex flex-col bg-slate-300 text-black rounded-md px-4 py-2"
              key={p.id}
            >
              <img
                src={p.url}
                alt={p.title}
                className="object-cover shadow-sm"
                loading="lazy"
              />
              <h2 className="my-2 font-xl font-semibold">{p.title}</h2>
              <p>
                Price :<span className="ml-2 text-gray-700">{p.price}</span>{" "}
              </p>
            </div>
          );
        })}
        {renderProduct(cate, rangeValue, search).length < 1 && (
          <h1 className="text-lg font-semibold">Sorry , nothing matched.</h1>
        )}
      </motion.div>
    </div>
  );
};

export default Filter;
