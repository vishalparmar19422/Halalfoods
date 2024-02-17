const FakeDiv = () => {
    return (
      <div className="w-[400px] h-[300px] bg-slate-800 m-5 ">
      </div>
    );
  }
  
  const Loader = ({ numrows }) => {
    // Generate an array of null values with the desired length
    const fakeDivs = Array(numrows).fill(null);
  
    return (
      <div className="flex flex-wrap ml-10">
        {/* Use map function to render multiple instances of FakeDiv */}
        {fakeDivs.map((_, index) => (
          <FakeDiv key={index} />
        ))}
      </div>
    );
  }
  
  export default Loader;
  