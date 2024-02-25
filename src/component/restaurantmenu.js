import { useState } from "react";
import { useParams } from "react-router-dom";
import { ImgUrl } from "./constants";
import Loader from "./loader.js";
import useRestaurantMenu from "../../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantmenu = useRestaurantMenu(id);

  return restaurantmenu == null ? (
    <Loader numrows={24} />
  ) : (
    <>
      <div className="main flex flex-col items-center">
        <Categoery />
        <div className=" container w-[900px] min-h-screen  ">
          {restaurantmenu.map((res, index) => {
            return <List {...res.card.info} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;

const List = ({ name, imageId, description, price, defaultPrice }) => {
  const displayPrice = defaultPrice !== undefined ? defaultPrice : price;
  return (
    <>
      <div className=" flex flex-col items-center  ">
        <div className=" flex justify-between w-[900px] h-[250px] bg-netural-400 shadow-[100px]  border-t-[1px] border-zinc-800 ">
          <div className="flex flex-col justify-between p-4">
            <h1 className=" ">
              <img
                className="w-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png"
              ></img>
              {name}
            </h1>
            <h1 className=""> &#8377;{Math.round(displayPrice / 100)}</h1>

            <h1 className="w-[500px] text-neutral-400">{description}</h1>
          </div>
          <div className="flex  flex-col justify-between items-center">
            <img
              src={ImgUrl + imageId}
              className="w-[200px] h-[200px] object-cover"
            ></img>
            <button className="border-[1px] text-green-400 border-black w-[80px] mb-[5px] rounded-md  hover:bg-stone-900 transition-all font-bold z-10">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Categoery = () => {
  let [visible, setVisible] = useState(true);
  function showMenu() {
    const btn = document.querySelector(".btn");
    const menu = document.querySelector(".container");

    if (visible == false) {
      btn.classList.remove("rotate-[-42deg]");
      btn.classList.add("rotate-45");
      setVisible(true);
      menu.classList.remove("hidden");
    } else if (visible == true) {
      menu.classList.add("hidden");
      btn.classList.add("rotate-[-42deg]");

      btn.classList.remove("rotate-[45deg]");
      setVisible(false);
    }
  }

  return (
    <>
      <div className="w-[900px] bg-green-400 rounded-md h-[30px] flex justify-between items-center mt-8 ">
        <h1 className="pl-[10px] text-white font-semibold">Recomanded</h1>
        <button
          className=" btn border[1px] border-white mr-[10px] h-[15px] border-r-[2px] border-b-[2px] w-[15px] rotate-[45deg] mb-[2px] up"
          onClick={showMenu}
        ></button>
      </div>
    </>
  );
};
  