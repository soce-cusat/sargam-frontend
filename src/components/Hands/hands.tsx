import { useEffect, useRef, useState } from "react";
import "./hands.css";

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
      <img
        ref={leftImgRef}
        src="./left.png"
        alt="Left Image"
        className={`left-img ${hasAnimated ? "rotate-left" : ""}`}
      />
      <div className="text">SARGAM</div>
      <img
        ref={rightImgRef}
        src="./right.png"
        alt="Right Image"
        className={`right-img ${hasAnimated ? "rotate-right" : ""}`}
      />
    </div>
  );
}
