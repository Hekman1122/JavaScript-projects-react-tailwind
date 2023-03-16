import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="section-div shadow-sm bg-amber-50 rounded-md">
      <ul className="w-full flex justify-around items-center font-semibold text-lg ">
        <li
          className={`${
            path === "/slider" ? "text-green-700" : ""
          } cursor-pointer duration-200`}
        >
          <Link to="/slider">Slider</Link>
        </li>
        <li
          className={`${
            path === "/quiz" ? "text-green-700" : ""
          } cursor-pointer duration-200`}
        >
          <Link to="/quiz">Quiz</Link>
        </li>
        <li
          className={`${
            path === "/filter" ? "text-green-700" : ""
          } cursor-pointer duration-200`}
        >
          <Link to="/filter">Filter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
