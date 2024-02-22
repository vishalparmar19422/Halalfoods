import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./component/nav";
import Body from "./component/body";
import Footer from "./component/footer";
import AboutUs from "./component/about";
import Contact from "./component/contact";
import ErrorPage from "./component/error-page";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/restaurantmenu";

const Main = () => (
  <>
    <div className="w-full h-full ">
      <Nav />
      {}
      <Outlet />
      <Footer />
    </div>
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
    {
      path:"/",
      element:<Body/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/about",
      element:<AboutUs/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/contact",
      element:<Contact/>,
      errorElement:<ErrorPage/>
    },

    {
      path:"/restaurant/:id",
      element:<RestaurantMenu/>,
      errorElement:<ErrorPage/>
    },
    
    

    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter} />);
