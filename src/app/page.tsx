"use client"
import Lenis from "lenis"
// import { useState, useEffect } from "react";
// import Contact from "@/components/Contact/Contact"
// import Footer from "@/components/Footer"
// import Footer from "@/components/footer/Footer1"
// import FloatingImages from "@/components/floatingimages/floatingimages";
import Hands from "@/components/Hands/Hands";
import ImageSection from "@/components/imagesection/Imagesection";
import Second from "@/components/second/second";
// import Header from "@/components/Header/index"
import { useState ,useEffect} from "react";
import Header from "@/components/header"
import ResponsiveBarGraph from "@/components/leaderboard/leaderboard";
import Loading from "@/components/Loading";
import Intro from "@/components/footer/Intro"
function App() {
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {

    const lenis = new Lenis()



    function raf(time: number) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }
 requestAnimationFrame(raf)

  }, [])
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
{/* <FloatingImages/>  */}
<div style={{ padding: "20px" }}>
      <h1>LeaderBoard</h1>
      <ResponsiveBarGraph />
    </div>
      {/* <Contact /> */}
      <Intro/>
      {/* <Footer/> */}
    </main>
  );
}

export default App;
