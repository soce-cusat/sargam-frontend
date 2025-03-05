import { useEffect, useRef, useState } from "react";
import "./Hands.css";
import Image from "next/image";
// import Image from "next/image";

export default function Hands() {
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (leftImgRef.current) {
      observer.observe(leftImgRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="section">
       <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
       {/* <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-transparent via-black to-black/50"></div> */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/efects.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        ref={leftImgRef}
        src="/left.png"
        alt="Left Image"
        width={800} height={600}
        className={`left-img ${hasAnimated ? "rotate-left" : ""}`}
      />
      {/* <Image src="/theyyam.png" alt="Image 1" width={800} height={600} className={styles.image1} /> */}
   <div 
    className="text-container" 
    style={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        // height: "100vh", 
        textAlign: "center", 
        color:"white",
        fontFamily: "Classical, sans-serif", 
        fontSize: "clamp(16px, 10vw, 128px)" 
    }}
>
    <div>SARGAM</div>
    <div>2025</div>
</div>

    <Image
        ref={rightImgRef}
        src="/right.png"
        alt="Right Image"
        width={800} height={600}
        className={`right-img ${hasAnimated ? "rotate-right" : ""}`}
      /> 
      
    </div>
  );
}
