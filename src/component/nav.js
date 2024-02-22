import { useState } from "react";
import Logo from "./assets/logo copy.png";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [button, setButton] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-10 bg-slate-800 cursor-pointer">
        <img className="w-[120px] rounded-full" src={Logo}></img>

        <ul className="text-white flex gap-10  font-bold text-[18px]  ">
          <Link to="/">
            <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200   ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200   ">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200   ">
              Contact us
            </li>
          </Link>
          <Link to="/cart">
            <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200   ">
              Cart
            </li>
          </Link>
        </ul>
        {button ? (
          <button
            className="border-2  border-black bg-neutral-300 rounded-lg px-2"
            onClick={() => {
              setButton(false);
            }}
          >
            Log In
          </button>
        ) : (
          <button
            className="border-2  border-black bg-neutral-300 rounded-lg px-2"
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
