'use client';
import { useEffect } from 'react';
import React from 'react';
import styles from './img.module.scss';
import gsap from 'gsap';
const FloatingImages: React.FC = () => {
    useEffect(() => {
        gsap.to(".image2", {
          y: 100, // Vertical movement (adjust as needed)
          repeat: -1, // Infinite repeat
          yoyo: true, // The animation will reverse after reaching its target
          duration: 1, // Duration of one movement cycle
          ease: "easeInOut", // Smooth easing for the movement
        });
      }, []);
  const positions = [
    { top: '10%', left: '10%', width: '100px', height: '70px' },  // Image 1
    { top: '20%', left: '30%', width: '60px', height: '120px' },  // Image 2
    // { top: '40%', left: '50%', width: '40px', height: '130px' },  // Image 3
    // { top: '60%', left: '70%', width: '150px', height: '100px' },  // Image 4
    // { top: '115%', left: '80%', width: '70px', height: '200px' },  // Image 5
    { top: '50%', left: '20%', width: '45px', height: '145px' },  // Image 6
    { top: '30%', left: '60%', width: '155px', height: '85px' },  // Image 7
    { top: '75%', left: '30%', width: '65px', height: '165px' }, 
    { top: '115%', left: '20%', width: '70px', height: '90px' },  // Image 5
    { top: '90%', left: '80%', width: '45px', height: '145px' }, 
    { top: '155%', left: '30%', width: '70px', height: '90px' },  // Image 6
    { top: '130%', left: '60%', width: '155px', height: '85px' },  // Image 7
    // { top: '105%', left: '30%', width: '65px', height: '165px' }, 
     // Image 8
  ];

  return (
    <main>
 <div  className="dv" style={{ position: 'relative', width: '100vw', height: '50vh', backgroundColor: 'black' }}>
      {positions.map((position, index) => (
        <img
          key={index}
          src={`./images/floating_${index + 1}.jpg`}
          alt={`Floating Image ${index + 1}`}
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            width: position.width,
            height: position.height,
            objectFit: 'cover',
            zIndex: index,
          }}
        />
      ))}
    </div>
    <div className={styles.title}>
  <img src="/theyyam.png" alt="Image 1" className={styles.image1} />
  <img src="/shadow.png" alt="Image 2" className={styles.image2} />
</div>
    </main>
  );
};

export default FloatingImages;
