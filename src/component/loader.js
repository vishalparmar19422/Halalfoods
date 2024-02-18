const FakeDiv = () => {
  return <div className="w-[400px] h-[300px] bg-slate-300 m-5 rounded-md "></div>;
};

const Loader = ({ numrows }) => {
  // Generate an array of null values with the desired length
  const fakeDivs = Array(numrows).fill(null);

  return (
    <>
      {" "}
      <div className="w-[250px] h-[250px] bg-transparent border-[8px] border-white animate-spin border-t-stone-800 fixed top-[50%] left-[40%]  rounded-full"></div>
      <div className="flex flex-wrap ml-10">
        {fakeDivs.map((_, index) => (
          <FakeDiv key={index} />
        ))}
      </div>
    </>
  );
};

export default Loader;
