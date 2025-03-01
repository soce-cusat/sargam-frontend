import { useState, useRef ,useEffect} from "react";
import { TiLocationArrow } from "react-icons/ti";

import ResponsivePiano from "./Piano";
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  
  const fonts = [
    "font-['Pricedown']",
    "font-['Hindi']",
    // "font-['Crackman']",
    // "font-['GameOfThrones']",
    "font-['KnightWarrior']",
    "font-['Ming']",
   "font-['Japan']"
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


return(
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Art Fest
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          any random content
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
      <video
            src="videos/intro.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            // src="videos/feature-2.mp4"
            title={
              <>
                leader<b>bo</b>ard
              </>
            }
            // description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 w-full h-full flex">
  <div className="relative z-10 w-full h-full flex items-center justify-center">
    <h1 
      className={`${fonts[currentFontIndex]} text-[5vw] font-bold text-center leading-none
      transition-all duration-500 text-white animate-morph whitespace-nowrap text-outline`}
    >
            SARGAM 2025
    </h1>
  </div>
</BentoTilt>



        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                ev<b>e</b>nts
              </>
            }
            description="A Events Happening"
            isComingSoon
          />
        </BentoTilt>

     
       
            <ResponsivePiano/>
         
      </div>
     
    </div>
  </section>
);}

export default Features;
