'use client';
import Loading from "@/components/Loading";
import Image from 'next/image';
import Header from '@/components/header';
import { useState ,useEffect} from "react";
const images = Array.from({ length: 35 }, (_, i) => `/gallery/gallery${1 + i}.jpg`);

export default function MasonryGallery() {
  // const [showSecondVideo, setShowSecondVideo] = useState(false);
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
    <>
      <Header />
      <section className="p-4 mt-[10vh] overflow-x-hidden">
      {/* <h1 className="text-center text-6xl font-bold mb-12 text-white">Gallery</h1> */}

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
      </section>
    </>
  );
}
