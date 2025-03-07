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
      <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
        <Header/>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-black text-3xl md:text-4xl lg:text-8xl font-bold">
 Page Not Found
</div>



      </div>
    );
  }
  