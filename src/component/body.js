import { Card } from "./card";
import { useEffect, useState } from "react";
import Loader from "./loader";

const isUserAuth = true;
const NorestaurantFound = () => {
  return (
    <>
      <div className="w-full h-[800px] m-0 p-0 text-[80px] rounded-lg flex justify-center items-center animate-bounce">
        <h1>NO Result Found</h1>d
      </div>
    </>
  );
};

const Body = () => {
  const [allrestaurants, setAllrestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getData();
  }, []); // <-- empty dependency array to run the effect only once

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setAllrestaurants(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setRestaurants(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    ); // Use optional chaining and provide a default empty array if any property is missing
  }
  return (
    <>
      <div className="flex justify-center w-full mt-2 h-8 ">
        <input
          type="text"
          placeholder="Search "
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          className="rounded-l-md focus:outline-none pl-2 w-[500px] bg-stone-500 placeholder:italic  placeholder:text-white text-white focus:text-white focus:text-lg"
        />
        <button
          className="text-white rounded-r-lg bg-stone-500 pr-2 "
          onClick={() => {
            const data = filterData(searchTxt, allrestaurants);
            setRestaurants(data);
          }}
        >
          <img
            className="w-[20px] rounded-r-lg"
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
          ></img>
        </button>
      </div>
      <div className="w-full min-h-screen flex flex-wrap  justify-center">
        {allrestaurants.length == 0 ? (
          <Loader numrows={24} />
        ) : restaurants.length == 0 ? (
          <NorestaurantFound />
        ) : (
          restaurants.map((restaurant, index) => {
            return <Card {...restaurant.info} key={restaurant.info.id} />;
          })
        )}
      </div>
    </>
  );
};
export default Body;

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurantlist) => {
    return restaurantlist.info.name
      .toLowerCase()
      .includes(searchTxt.toLowerCase());
  });
  return filterData;
}