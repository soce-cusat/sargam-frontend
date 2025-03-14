'use client';
import Loading from "@/components/Loading";
import Image from 'next/image';
import Header from '@/components/header';
import { useState ,useEffect} from "react";
const images = Array.from({ length: 26 }, (_, i) => `/gallery/gallery${1 + i}.jpg`);

export default function MasonryGallery() {
  // const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      <section className="p-4 mt-[10px] overflow-x-hidden">
      <div className="h-30 w-full">

</div>
<h1 className={`font-bold mb-4 text-center text-white ${isMobile ? "text-3xl" : "text-8xl"}`}>
        Gallery
      </h1>

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
