 export function filterData(searchTxt, restaurants) {
    const filterData = restaurants.filter((restaurantlist) => {
      return restaurantlist.info.name
        .toLowerCase()
        .includes(searchTxt.toLowerCase());
    });
    return filterData;
  }