"use client"
import Loading from "@/components/Loading";
import Header from "@/components/header"
import { useState ,useEffect} from "react";
export default function NotFound() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate loading or fetching data
      setTimeout(() => {
        setIsLoading(false); // Stop loading after 2 seconds (for example)
      }, 2000);
    }, []);
  
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      {/* 404 Container */}
      <div className="flex items-center font-bold">
        {/* Left 4 */}
        <span className="text-[20vw] sm:text-[150px] md:text-[200px] lg:text-[300px] xl:text-[350px] leading-none">4</span>

        {/* Rotating Circle as 0 */}
        <div className="relative mx-4 flex items-center">
          <div className="rounded-full overflow-hidden animate-spin-slow flex items-center justify-center">
            <img
              src="/mandala.png"
              alt="Background"
              className="w-[20vw] h-[20vw] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Right 4 */}
        <span className="text-[20vw] sm:text-[150px] md:text-[200px] lg:text-[300px] xl:text-[350px] leading-none">4</span>
      </div>

      {/* Page Not Found Text */}
      <p className="text-[5vw] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4 font-semibold">
        Page Not Found
      </p>
    </div>
    );
  }
  