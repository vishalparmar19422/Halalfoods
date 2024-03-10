import { useState, useContext } from "react";
import Logo from "./assets/logo copy.png";
import { Link } from "react-router-dom";
import footerInfo from "../../utils/userContext";
import { useSelector } from "react-redux";
export const Nav = () => {
  const [button, setButton] = useState(false);
  const [menu, setMenu] = useState(false);
  const { user, setUser } = useContext(footerInfo);
  const cartItems = useSelector((store) => store.cart.items);

  // const [cartItems, setCartItems] = useState(
  //   useSelector((store) => store.cart.items)
  // );

  function animate() {
    setMenu((prev) => !prev);
  }
  return (
    <>
      <div className=" main-nav flex justify-between items-center px-10 bg-slate-800 cursor-pointer z-20">
        <img className="w-[120px] rounded-full" src={Logo}></img>
        <svg
          onClick={animate}
          className="h-11 w-11  sm:hidden "
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
        </svg>
        {menu && (
          <div className="w-[300px] fixed right-0 bottom-0 top-0 backdrop-blur-lg z-20 ">
            <svg
              onClick={animate}
              className="h-11 w-11 ml-4 mt-4"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            </svg>
            <ul className="text-[30px] text-black font-bold flex flex-col items-center justify-evenly h-full">
              <Link to="/">
                <li className="p-1 rounded-md h-11 hover:bg-green-400 transition ease-linear duration-200   ">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="p-1 rounded-md h-12 hover:bg-green-400 transition ease-linear duration-200   ">
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li className="p-1 rounded-md h-12 hover:bg-green-400 transition ease-linear duration-200   ">
                  Contact us
                </li>
              </Link>
              <Link to="/cart">
                <li className="p-1 rounded-md h-12 hover:bg-green-400 transition ease-linear duration-200    ">
                  Cart-{cartItems.length}
                </li>
              </Link>
              <Link to="/instamart">
                <li className="p-1 rounded-md h-12 hover:bg-green-400 transition ease-linear duration-200   ">
                  Instamart
                </li>
              </Link>
              <li>
                {button ? (
                  <button
                    className="   bg-stone-700 text-white  rounded-lg px-2"
                    onClick={() => {
                      setButton(false);
                    }}
                  >
                    Log In
                  </button>
                ) : (
                  <button
                    className="bg-stone-700  text-white rounded-lg px-2"
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
            <li className="p-1 rounded-md h-8 hover:bg-red-600    ">Home</li>
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
            <li
              after-dynamic-value={cartItems.length}
              className={`relative p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200  
              after:content-[attr(after-dynamic-value)]  
              after:absolute
              after:top-0
              after:rounded-tr-md
              after:rounded-br-md
              after:w-4
              after:h-8
              after:hover:bg-red-600
              after:text-green-500`}
            >
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
