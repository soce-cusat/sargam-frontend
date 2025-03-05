"use client"
import Contact from "@/components/Contact/Contact"
// import FloatingImages from "@/components/floatingimages/floatingimages";
import Hands from "@/components/Hands/Hands";
import ImageSection from "@/components/imagesection/Imagesection";
import Second from "@/components/second/second";
import Header from "@/components/Header/index"
import { useState } from "react";
import ImageBarGraph from "@/components/leaderboard/leaderboard";

function App() {
  const [showSecondVideo, setShowSecondVideo] = useState(false);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Header />
      <section className="relative h-screen overflow-x-hidden">
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
          {/* Overlay Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>
      </section>

      <Second />
      <Hands />
      <ImageSection />
      {/* <FloatingImages/> */}
      <ImageBarGraph />
      <Contact />
    </main>
  );
}

export default App;
