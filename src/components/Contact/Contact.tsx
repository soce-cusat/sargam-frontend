import { useState, useEffect } from "react";

const ImageSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's `sm` breakpoint is 640px
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for screen size changes

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  return (
    <div className="flex w-screen max-w-full gap-4 p-4 h-auto sm:h-[60vh] items-center justify-center bg-black">
      <div className="flex flex-col sm:flex-row w-full gap-4">
        {/* Contact Section */}
        <div
          className="bg-black text-white p-5 rounded-lg shadow-md flex-grow sm:flex-[3] border-2 border-white flex flex-col items-center justify-center"
          style={{
            minHeight: isMobile ? "150px" : "300px",
            maxHeight: isMobile ? "250px" : "400px",
          }}
        >
          <h2 className="text-lg sm:text-2xl font-bold text-center mb-4">Contact</h2>
          <div className="text-center text-sm sm:text-base">
            <p className="mb-2">John Doe - +123 456 7890</p>
            <p className="mb-2">Jane Smith - +987 654 3210</p>
            <p className="mb-2">Alice Johnson - +456 789 1234</p>
          </div>
        </div>

        {/* Map Section */}
        <div
          className="bg-white p-5 rounded-lg shadow-md flex-grow sm:flex-[1] m-5 relative"
          style={{
            minHeight: isMobile ? "200px" : "250px",
            maxHeight: isMobile ? "300px" : "350px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.667606309595!2d76.32310479678955!3d10.044263400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c377917e985%3A0xb0fd4b1e85a6e51f!2sCochin%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1741074414029!5m2!1sen!2sin"
            className="w-full h-full rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
