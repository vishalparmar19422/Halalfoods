import { useState } from "react";
import { useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [restaurantmenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getmenueitems();
  }, []);

  async function getmenueitems() {
    try {
      let listarray;
      const json = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const data = await json.json();
      console.log(data);

      setRestaurantMenu(
        data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  }

  return restaurantmenu;
};
export default useRestaurantMenu;
