import { useState } from "react";
import Logo from "./assets/logo copy.png";
import { Link } from "react-router-dom";
import Menu from "../menu.svg";

export const Nav = () => {
  const [button, setButton] = useState(false);
  const [menu, setMenu] = useState(false);

  function animate() {
    setMenu((prev) => !prev);
  }
  return (
    <>
      <div className=" flex justify-between items-center px-10 bg-slate-800 cursor-pointer ">
        <img className="w-[120px] rounded-full" src={Logo}></img>
        <svg
          onClick={animate}
          className="h-11 w-11  sm:hidden "
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        {menu && (
          <div className="w-[300px] fixed right-0 bottom-0 top-0 backdrop-blur-lg z-20 ">
            <svg
              onClick={animate}
              className="h-11 w-11   "
              xmlns="http://www.w3.org/2000/svg"  
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            <ul className="text-[30px] text-black  flex flex-col items-center justify-around h-full">
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
              <Link to="/instamart">
                <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200   ">
                  Instamart
                </li>
              </Link>
              <li>
                {button ? (
                  <button
                    className="   bg-stone-700   rounded-lg px-2"
                    onClick={() => {
                      setButton(false);
                    }}
                  >
                    Log In
                  </button>
                ) : (
                  <button
                    className="bg-stone-700 rounded-lg px-2"
                    onClick={() => {
                      setButton(true);
                    }}
                  >
                    Log Out
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}

        <ul className="  sm:flex sm:text-white  sm:justify-between sm:font-bold sm:text-[18px] sm:min-w-[500px] hidden ">
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
          <Link to="/instamart">
            <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200   ">
              Instamart
            </li>
          </Link>
          <li>
            {button ? (
              <button
                className="   bg-stone-700   rounded-lg px-2"
                onClick={() => {
                  setButton(false);
                }}
              >
                Log In
              </button>
            ) : (
              <button
                className="bg-stone-700 rounded-lg px-2"
                onClick={() => {
                  setButton(true);
                }}
              >
                Log Out
              </button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};
