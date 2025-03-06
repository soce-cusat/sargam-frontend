import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-8 flex items-center justify-between mx-8">
      {/* Company Name */}
      <div className="text-lg font-semibold">Your Company</div>
      
      {/* Logo */}
      <div>
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
      </div>
      
      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="mailto:yourcompany@gmail.com" className="text-white text-2xl hover:text-gray-400">
          <FaEnvelope />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
