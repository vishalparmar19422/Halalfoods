import { useEffect, useState } from "react";

const useRestaurantCard = ()=>{
    const [restaurant,setRestaurant] = useState();
    useEffect(() => {
        getData();
      }, []); // <-- empty dependency array to run the effect only once
    
      async function getData() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
    
        setRestaurant(
          json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []
        );
        
      }
      return restaurant;
}
export default useRestaurantCard;
