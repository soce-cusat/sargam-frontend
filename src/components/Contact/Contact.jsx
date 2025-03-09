import { FaWhatsapp, FaInstagram, FaYoutube, FaMedium } from "react-icons/fa";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="bg-black rounded-lg shadow-lg p-10">
      
      <div id="contact" className="min-h-96 w-full">
        
        <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        
          <div className="flex flex-col md:flex-row gap-8 p-5 md:p-10 items-center md:items-stretch">
            
            {/* Contact Box */}
            <div className="max-h-[350px] h-auto w-full md:w-1/3 rounded-lg overflow-hidden flex flex-col justify-center items-center text-center border-2 border-black bg-black text-white p-5 md:p-7">
           
            {/* <h1 className="text-2xl md:text-4xl font-bold text-blue-100 uppercase tracking-wide absolute-top">
  HAVE ANY QUESTIONS?
</h1> */}
<h1 className="text-3xl md:text-5xl font-bold text-blue-100 uppercase tracking-wide">
  CONTACT US
</h1>
<br/>

              <div className="flex flex-col items-start mt-4">
              
              <p className="text-xs md:text-sm lg:text-base font-bold text-tedRed">Zone 1 --IHSAN MUHAMMED A.S</p>
              <p className="text-xs md:text-sm lg:text-base font-bold text-tedRed">Zone 2 --ABEL SAJ </p>
              <p className="text-xs md:text-sm lg:text-base font-bold text-tedRed">Zone 3 --NAND KISHOR </p>
              <p className="text-xs md:text-sm lg:text-base font-bold text-tedRed">Zone 4 --AMAL GOPAL </p>
              <p className="text-xs md:text-sm lg:text-base font-bold text-tedRed">Zone 5 --MUHAMMED UNAIS </p>
              <p className="text-xs md:text-sm lg:text-base font-bold text-tedRed">Zone 6 --ANTONY FRANCIS</p>
              <p className="text-xs md:text-sm lg:text-base font-bold text-tedRed">Zone 7 --BEEVILEFILA </p>
              <p className="text-xs md:text-sm lg:text-base font-bold text-tedRed">Zone 8 --FAHEEM ABDUSSALAM </p>
              {/* <p className="text-xs md:text-sm lg:text-base font-bold text-tedRed">Kevin -Zone 1, 132123123123</p> */}

              </div>
            
            </div>

            {/* Follow Us Box - Hidden on small screens */}
            <div className="hidden md:flex max-h-[300px] h-auto w-full md:w-1/3 rounded-lg overflow-hidden flex-col items-center justify-center border-2 border-black bg-black p-5 md:p-7">
  <img
    src="/mandala.png"
    alt="Rotating Image"
    className="rotate-slow object-contain"
  />
</div>
            {/* Map Box */}
            <div className="min-h-[150px] h-auto w-full md:w-1/3 rounded-lg overflow-hidden border-2 border-white p-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.667606430276!2d76.32529347503174!3d10.044263390063426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c377917e985%3A0xb0fd4b1e85a6e51f!2sCochin%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1741455267422!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg border-2 border-black w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

