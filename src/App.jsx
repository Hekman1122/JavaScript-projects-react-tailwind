import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Slider from "./components/Slider";
import Quiz from "./components/Quiz";
import Filter from "./components/Filter";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const App = () => {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/slider",
          element: <Slider />,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
        {
          path: "/filter",
          element: <Filter />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
