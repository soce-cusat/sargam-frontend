import React, { useEffect, useState } from "react";
import Image from "next/image";
import floating1 from "../../../public/images/floating_1.jpg";
import floating2 from "../../../public/images/floating_2.jpg";
import floating3 from "../../../public/images/floating_3.jpg";
import floating4 from "../../../public/images/floating_4.jpg";
import floating5 from "../../../public/images/floating_5.jpg";
import floating6 from "../../../public/images/floating_6.jpg";
import floating7 from "../../../public/images/floating_7.jpg";
import floating8 from "../../../public/images/floating_8.jpg";

// Import images in a consistent way
const images = [
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8,
];

// Define the type for the position object
interface Position {
  top: string;
  left: string;
}

const MasonryGrid: React.FC = () => {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    // Generate random positions for each image
    const newPositions = images.map(() => ({
      top: `${Math.random() * 80}vh`, // Random top position between 0 and 80% of the viewport height
      left: `${Math.random() * 80}vw`, // Random left position between 0 and 80% of the viewport width
    }));
    setPositions(newPositions);
  }, []);

  return (
    <div className="grid">
      {images.map((src, index) => (
        <div
          className="grid-item"
          key={index}
          style={{
            position: "absolute", // Makes the images float
            top: positions[index]?.top, // Random top position
            left: positions[index]?.left, // Random left position
          }}
        >
          <Image 
            src={src} 
            alt={`Floating ${index + 1}`} 
            width={200} // Adjust width
            height={300} // Adjust height
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
