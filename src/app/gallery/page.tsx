"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";
import Image from "next/image";

const images = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/${11 + i}.jpeg`,
}));

export default function GalleryComponent() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 py-6 flex flex-col items-center">
      {/* Title */}
      <h2 className="font-bold mb-6 text-center leading-none" style={{ fontSize: "max(4rem, 5vw)", width: "50vw" }}>
        Gallery
      </h2>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={{ default: 3, 1024: 2, 640: 2 }}
        className="flex gap-2"
        columnClassName="masonry-column"
      >
        {images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer mb-2"
            alt={`Image ${11 + i}`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </Masonry>

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
