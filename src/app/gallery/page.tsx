"use client";
import Header from "@/components/header";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import Masonry from "react-masonry-css";
import Image from "next/image";

const images = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/${11 + i}.jpeg`,
}));

export default function GalleryComponent() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="w-full min-h-screen bg-black text-white px-8 py-12 flex flex-col items-center">
      <Header />
      {/* Title */}
      <h2
        className="font-bold mb-12 text-center leading-none"
        style={{ fontSize: "max(4rem, 5vw)", width: "50vw" }}
      >
        Gallery
      </h2>

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {images.map((img, i) => (
          <div key={i}>
            <Image
              src={img.src}
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer mb-4"
              alt={`Image ${11 + i}`}
              width={100} // Define a fixed width
              height={100} // Define a fixed height
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: img.src }))}
        index={index}
      />
    </div>
  );
}
