"use client";
import Loading from "@/components/Loading";
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";
import { useEffect, useState } from "react";
const images = Array.from({ length: 26 }, (_, i) => `/gallery/gallery${1 + i}.jpg`);
import ResponsiveBarGraph from "@/components/leaderboard/leaderboard";

// const Loading = () => <div>Loading...</div>; // Replace with actual loading UI

// import { useState } from "react";

const MainPage = () => {
  const [showSecondVideo, setShowSecondVideo] = useState(false);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 overflow-hidden">
      {!showSecondVideo ? (
        <video
          src="/final (2).mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={() => setShowSecondVideo(true)}
        />
      ) : (
        <video
          src="/loop (1).mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        />
      )}
    </div>
  );
};

const isMobile=false
const data = [
    { name: "1", value: 0 },
    { name: "2", value: 0 },
    { name: "3", value: 0 },
    { name: "4", value: 0 },
    { name: "5", value: 0 },
    { name: "6", value: 0 },
    { name: "7", value: 0 },
    { name: "8", value: 0 },
  ];
  
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f", "#ffb6c1", "#4682b4", "#ff6347"];
  
const Leaderboard = () =><div className="w-full flex flex-col items-center justify-center p-4">
{/* Responsive Leaderboard Heading */}
<div className="h-30 w-full">

</div>
<ResponsiveBarGraph/>
</div>





const Gallery = () =>         

<div className="masonry-layout">
{images.map((src, index) => (
  <div key={index} className="masonry-item">
    <Image
      src={src}
      alt={`Image ${index + 11}`}
      width={300}
      height={400}
      className="w-full h-auto rounded-lg"
    />
  </div>
))}
</div>
 // Your Gallery Component

const sections = [MainPage, Leaderboard, Gallery]; // List of Components

const Sequencer = () => {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true); // Show loading

      setTimeout(() => {
        setIsLoading(false); // Hide loading after 2 seconds
        setIndex((prevIndex) => (prevIndex + 1) % sections.length); // Move to next component
      }, 2000); // 2 seconds of loading
    }, 15000); // 5 seconds total (2s loading + 3s component display)

    return () => clearInterval(interval);
  }, []);

  const CurrentComponent = sections[index]; // Get current section to render

  if (isLoading) {
    return <Loading />; // Show loading component
  }

  return <CurrentComponent />; // Render current section
};

export default Sequencer;
