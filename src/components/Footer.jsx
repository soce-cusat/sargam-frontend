import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  // { href: "https://discord.com", icon: <FaDiscord /> },
  // { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://whatsapp.com", icon: <FaWhatsapp /> },
];

const Footer = () => {
  return (
    <footer className="w-screen min-h-[8vh] mt-10 bg-[#a01230] py-4 text-black flex items-center">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:items-center">
        <p className="text-center text-white text-sm font-light md:text-left">
          @SARGAMx25
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          // href="#privacy-policy"
          className="text-center text-white text-sm font-light hover:underline md:text-right"
        >
          CUSAT
        </a>
      </div>
    </footer>
  );
};

export default Footer;