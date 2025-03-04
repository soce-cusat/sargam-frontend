// import About from "./components/About";
// import Hero from "./components/Hero";
// import NavBar from "./components/Navbar";
// import Features from "./components/Features";
// import Story from "./components/Story";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
"use client"
import { useState } from "react";
import Footer from "@/components/Footer"
import FullScreenVideo from "@/components/Landingpage";
import Header from "@/components/Header"
import Secondpage from "@/components/Secondpage/Secondpage";
import Leaderboard from "@/components/Leaderboard/Leaderboard";
import ImageSection from "@/components/imagesection/Imagesection";
import Contact from "@/components/Contact/Contact"
import ResponsiveCards from "@/components/Thirdpage/ResponsiveCards";
import MasonryGrid from "@/components/imgsecmobile/Masornygrid";
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
        </div>
      </section>

        <Secondpage />

          <Leaderboard/>

        <ImageSection/>
        {/* <MasonryGrid/> */}
        <Contact/>

      <Footer/>
    </main>
  );
}

export default App;


// export default App;
