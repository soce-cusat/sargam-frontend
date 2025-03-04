import React from "react";

const SecondPage = () => {
  const numbers = [16, 17, 18, 19, 20, 21]; // Numbers for cards 2-7

  return (
<div className="flex flex-col justify-center items-center w-screen h-[40vh] sm:h-[70vh] p-5 bg-black pb-0">


  {/* Cards container */}
  <div className="flex w-full mt-10">
    {/* First card with black background and margin to the right */}
    <div
  className="flex-1 aspect-square flex items-center justify-center text-white md:rounded-2xl sm:rounded-lg text-2xl mr-2"
  style={{ backgroundColor: "#580608" }}
>
</div>


    {/* Other cards with no margin between them */}
    {numbers.map((num, index) => (
  <div
    key={index}
    className="flex-1 aspect-square flex items-center justify-center text-white md:rounded-2xl sm:rounded-lg border-solid"
    style={{
       fontFamily: "1",
      fontSize: "min(10vw, 10vh)",
      backgroundColor: "transparent",
      borderColor: "#580608",
      borderStyle: "solid",
      borderWidth: `
        ${window.innerWidth >= 768 ? "4px" : "2px"}  /* Top */
        ${index === numbers.length - 1 ? (window.innerWidth >= 768 ? "4px" : "2px") : "0"} /* Right */
        ${window.innerWidth >= 768 ? "4px" : "2px"}  /* Bottom */
        ${index === 0 ? (window.innerWidth >= 768 ? "4px" : "2px") : "0"} /* Left */
      `,
    }}
  >
    {num}
  </div>
))}


  </div>
  <div className="flex w-full gap-2 md:flex-row flex-col items-center">
        {/* Side card for both mobile and desktop */}
        <div className="flex-2 bg-blue-500 text-white text-xl font-bold flex justify-center items-center rounded-lg w-11/12 aspect-[2/1] md:w-auto md:h-64 sm:h-38">
          2
        </div>
        
        {/* Middle card (Hidden on mobile) */}
        <div className="hidden md:flex flex-1 bg-blue-500 text-white text-xl font-bold justify-center items-center rounded-lg md:h-64 md:w-64 sm:h-48 sm:w-8">
          1
        </div>
        
        {/* Side card for both mobile and desktop */}
        <div className="flex-2 bg-blue-500 text-white text-xl font-bold flex justify-center items-center rounded-lg w-11/12 aspect-[2/1] md:w-auto md:h-64 sm:h-38">
          2
        </div>
      </div>
</div>


  );
};
export default SecondPage;
