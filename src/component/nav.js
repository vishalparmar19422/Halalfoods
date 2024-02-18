import { useState } from "react";
import  Logo  from "./assets/logo copy.png";

export  const Nav = () => {
  const [button, setButton] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-10 bg-slate-800 cursor-pointer">
        <img
          className="w-[120px] rounded-full"
          src={Logo}
        ></img>

        <ul className="text-white flex gap-10  font-bold text-[18px]  ">
          <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200">
            Home
          </li>
          <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200   ">
            About
          </li>
          <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200">
            Contact
          </li>
          <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200">
            Cart
          </li>
        </ul>
        {button ? (
          <button className="border-2  border-black bg-neutral-300 rounded-lg px-2  "
            onClick={() => {
              setButton(false);
            }}
          >
            Log In
          </button>
        ) : (
          <button className="border-2  border-black bg-neutral-300 rounded-lg px-2"
            onClick={() => { 
              setButton(true);
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </>
  );
};


