import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import {Nav} from "./component/nav"
import Body from "./component/body"
import Footer from "./component/footer";
import AboutUs from "./component/about";

import {createBrowserRouter,RouterProvider} from "react-router-dom";




const Main= ()=>(
    
        <>
        <div className="w-full h-full cursor-pointer">
            <Nav/>
            <Body/>
            <Footer/>
            
        </div>
        </>
   
);
const appRouter = createBrowserRouter([
{
    path:"/",
    element:<Main/>
},
{
    
        path:"/about",
        element:<AboutUs/>
    
}
]);

    const root = ReactDOM.createRoot(document.querySelector(".root"));
    root.render(<RouterProvider router={appRouter}/>);