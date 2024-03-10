import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../utils/cartSlice";
import { ImgUrl } from "./constants";
import { NorestaurantFound } from "./body";
import { List } from "./restaurantmenu";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  function handleRmove(index) {
    dispatch(removeItem(index));
  }

  return (
    <div className="w-full min-h-[100vh]  no-scrollbar  flex justify-center">
      <div className=" w-[900px] ml-10 mt-10 ">
        {cartItems.length == 0 ? (
          <NorestaurantFound title={"Cart is Empty"} />
        ) : (
          cartItems.map((res, index) => {
            return (
              <>
                <List {...res.card.info} key={index}index={index}/>
                <button
                  onClick={() => handleRmove(index)}
                  className="border-[1px] text-green-400 border-black w-[80px] mb-[5px] rounded-md  hover:bg-stone-900 transition-all font-bold z-10"
                >
                  Remove
                </button>
              </>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Cart;
