import { useState } from "react";
import { useParams } from "react-router-dom";
import { ImgUrl } from "./constants";
import Loader from "./loader.js";
import useRestaurantMenu from "../../utils/useRestaurantMenu.js";
import { addItem } from "../../utils/cartSlice.js";
import { useDispatch, useSelector } from "react-redux"; 
const RestaurantMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const restaurantmenu = useRestaurantMenu(id);

  function handleItems(items) {
    dispatch(addItem(items));
    console.log(items);
  }

  return restaurantmenu == null ? (
    <Loader numrows={24} />
  ) : (
    <>
      <div className="main flex flex-col items-center">
        {/* <Categoery /> */}
        <div className=" container w-[900px] min-h-screen  ">
          {restaurantmenu.map((res, index) => {
            return (
              <>
                    <List {...res.card.info} key={index} />
                <button
                  onClick={() => handleItems(res)}
                  className="border-[1px] text-green-400 border-black w-[80px] mb-[5px] rounded-md  hover:bg-stone-900 transition-all font-bold z-10"
                >
                  Add
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;

 export const List = ({ name, imageId, description, price, defaultPrice ,index}) => {
  const displayPrice = defaultPrice !== undefined ? defaultPrice : price;

  return (
    <>
      <div className=" main md:flex md:flex-col md:items-center  ">
        <div className=" md:flex md:justify-between md:w-[900px] md:h-[250px] md:bg-netural-400 md:shadow-[100px]  md:border-t-[1px] md:border-zinc-800 ">
          <div className=" flex flex-col items-center md:flex  md:flex-col md:justify-between md:items-center">
            <img
              src={ImgUrl + imageId}
              className="w-[200px] h-[200px] object-cover"
            ></img>
          </div>
          <div className=" flex flex-col items-center md:flex md:flex-col jmd:ustify-between md:p-4">
            <h1 className=" ">
              <img
                className="w-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png"
              ></img>
              {name}
              {index}
            </h1>
            <h1 className=""> &#8377;{Math.round(displayPrice / 100)}</h1>

            <h1 className="w-[500px] text-neutral-400 text-center">
              {description}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

// const Categoery = () => {
//   let [visible, setVisible] = useState(true);
//   function showMenu() {
//     const btn = document.querySelector(".btn");
//     const menu = document.querySelector(".container");

//     if (visible == false) {
//       btn.classList.remove("rotate-[-42deg]");
//       btn.classList.add("rotate-45");
//       setVisible(true);
//       menu.classList.remove("hidden");
//     } else if (visible == true) {
//       menu.classList.add("hidden");
//       btn.classList.add("rotate-[-42deg]");

//       btn.classList.remove("rotate-[45deg]");
//       setVisible(false);
//     }
//   }

//   return (
//     <>
//       <div className="w-[900px] bg-green-400 rounded-md h-[30px] flex justify-between items-center mt-8 ">
//         <h1 className="pl-[10px] text-white font-semibold">Recomanded</h1>
//         <button
//           className=" btn border[1px] border-white mr-[10px] h-[15px] border-r-[2px] border-b-[2px] w-[15px] rotate-[45deg] mb-[2px] up"
//           onClick={showMenu}
//         ></button>
//       </div>
//     </>
//   );
// };
