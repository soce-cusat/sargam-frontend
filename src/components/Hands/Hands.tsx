import { useEffect, useRef, useState } from "react";
import "./Hands.css";
import Image from "next/image";

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
      <Image
        ref={leftImgRef}
        src="./left.png"
        alt="Left Image"
        className={`left-img ${hasAnimated ? "rotate-left" : ""}`}
      />
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
        src="./right.png"
        alt="Right Image"
        className={`right-img ${hasAnimated ? "rotate-right" : ""}`}
      />
    </div>
  );
}
