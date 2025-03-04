import React from "react";

const SecondPage = () => {
  const numbers = [16, 17, 18, 19, 20, 21]; // Numbers for cards 2-7

  return (
<div className="flex flex-col justify-center items-center w-screen h-[40vh] sm:h-[70vh] p-5 bg-black pb-0">


  {/* Cards container */}
  <div className="flex w-full mt-10">
    {/* First card with black background and margin to the right */}



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
      borderWidth: "2px",
    }}
  >
    {num}
  </div>
  
))}

<div 
  className="flex-1 aspect-square flex items-center justify-center text-white md:rounded-2xl sm:rounded-lg text-2xl mr-2"  
  style={{ 
    backgroundColor: "black", 
    backgroundImage: 'url("/Layer 8.png")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' 
  }} 
> 
</div>

  </div>
  <div className="flex w-full max-w-full aspect-[5/2] md:aspect-[4/1] max-h-[12vh] md:max-h-[30vh] gap-2">
        <div style={{ 
    backgroundColor: "black", 
    backgroundImage: 'url("/Layer 11.png")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' 
  }}  className="flex-2 flex justify-center items-center text-white text-xl font-bold text-center bg-blue-500 rounded-xl p-2">
          
        </div>
        <div className="flex-1 flex justify-center items-center text-white text-xl font-bold text-center bg-red-500 rounded-xl p-2 hidden md:flex">
          1
        </div>
        <div className="flex-2 flex justify-center items-center text-white text-xl font-bold text-center bg-green-500 rounded-xl p-2">
          2
        </div>
      </div>
</div>

  );
};
export default SecondPage;
