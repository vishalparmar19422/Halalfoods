import React, { lazy, Suspense } from "react";
import Loader from "./component/loader";
import ReactDOM from "react-dom/client";
import { Nav } from "./component/nav";
import Body from "./component/body";
import Footer from "./component/footer";
import AboutUs from "./component/about";
import Contact from "./component/contact";
import ErrorPage from "./component/error-page";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/restaurantmenu";

const Instamart = lazy(() => import("./component/instamart"));

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
        path: "/",
        element: <Body />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <AboutUs name={"About Us"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },

      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Loader numrows={24}/>}>
            <Instamart />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter} />);
