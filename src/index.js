import React, { lazy, Suspense, useState, useContext } from "react";
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
import footerInfo from "../utils/userContext";
import { Provider } from "react-redux";
import store from "../utils/store";

const Instamart = lazy(() => import("./component/instamart"));

const Main = () => {
  const [user, setUser] = useState({
    name: "Vishal Parmar",
    gmail: "vishalparmar8234@gmail.com",
    copyRight: {
      symbol: "©",
      year: 2024,
      appName: "Halal food",
    },
  });

  return (
    <>
      <Provider store={store}>
        <footerInfo.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Nav />
          <Outlet />
          <Footer />
        </footerInfo.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body us />,
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
          <Suspense fallback={<Loader numrows={24} />}>
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
