import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./component/nav"
import Body from "./component/body"




const Main= ()=>(
    
        <>
        <div className="w-full h-full ">
            <Nav/>
            <Body/>
            
        </div>
        </>
   
);

    const root = ReactDOM.createRoot(document.querySelector(".root"));
    root.render(<Main/>);