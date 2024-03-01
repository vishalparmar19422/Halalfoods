import { useState } from "react";

const Section = ({ info, isVisible, setIsvisible }) => {
  return (
    <>
      <h1 className=" bg-red-200 w-[700px] h-12 rounded-t-md flex items-center text-black justify-between px-2 shadow-xl">
        Info{" "}
        {isVisible ? (
          <button onClick={() => setIsvisible(isVisible)}>Hide</button>
        ) : (
          <button onClick={() => setIsvisible(isVisible)}>Show</button>
        )}
      </h1>
      {isVisible && (
        <p className="bg-red-200 w-[700px] flex justify-center">{info}</p>
      )}
    </>
  );
};

const Instamart = () => {
  const [section, setSection] = useState("");

  return (
    <>
      <div className="flex flex-col w-full h-screen  items-center border-red-400 border-2">
        <div className="w-full flex justify-center">
          <h1 className="bg-red-500 text-white p-4 rounded-md">
            Instamart Order Anything
          </h1>
        </div>
        <div className="w-full flex flex-col justify-start min-h-[100px] ml-4">
          <Section
            info={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            isVisible={section === "section1"}
            setIsvisible={(isVisible) =>
              isVisible ? setSection("") : setSection("section1")
            }
          />
          <Section
            info={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            isVisible={section === "section2"}
            setIsvisible={(isVisible) =>
              isVisible ? setSection("") : setSection("section2")
            }
          />
        </div>
      </div>
    </>
  );
};
export default Instamart;
