import React from "react";

const ResponsiveCards = () => {
  return (
<div className="flex flex-col justify-center items-center w-screen h-[40vh] sm:h-[70vh] p-5 bg-black pt-0">
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

export default ResponsiveCards;