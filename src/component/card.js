const restaurentList = {
  name: "vegetable",
  cuisines: ["Indian", "Vegan", "American"],
  rating: 4.3,
};

export const Card = ({name,cuisines,cloudinaryImageId,avgRating}) => (
  <>

    <div className="h-[350px] w-[350px]  rounded-3xl m-2 " >
      <div className="img-food h-[200px] flex justify-center">
        <img
          className="w-[85%] rounded-lg object-cover"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
      </div>
      <div className="flex flex-col items-center pt-3">
        <h1 className="self-start pl-8">{name}</h1>
        <h1 className="self-start pl-8 pt-2">{cuisines.join(", ")}</h1>
        <h1 className="self-start pl-8 pt-2">{avgRating}&#9733;</h1>
      </div>
    </div>
  </>
);
