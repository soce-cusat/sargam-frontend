"use client"
import { useState } from "react";

const FullScreenVideo = () => {
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

export default FullScreenVideo;
