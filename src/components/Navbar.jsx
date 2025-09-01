import gsap from "gsap";
import { useEffect, useState} from "react";
import resume from "../assets/Kumar_Shreyash_Resume.pdf";
import ks from "../assets/ks.webp"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResumeClick = () => {
    window.open(resume, "_blank");

    const link = document.createElement("a");
    link.href = resume;
    link.download = "Kumar_Shreyash_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".gsap", { opacity: 0, y: -70 });
    tl.set(".gsap1", { opacity: 0, y: 70 });


    tl.to(".gsap", {
      opacity: 1,
      y: 0,
      duration: .5,
      delay: 0.2,
      stagger: 0.3,
    });

    tl.to(".gsap1", {
      opacity: 1,
      y: 0,
    });
  }, []);
  

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-5 py-3 flex items-end justify-between">
      <div className="text-xl font-bold gsap">
        <img className="w-15" src={ks} alt="" />
        
      </div>

      {/* Hamburger Button */}
      <button
        className="lg:hidden focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <div
          className={`w-6 h-0.5 bg-green-600 mb-1 transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-green-600 mb-1 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-green-600 transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Nav Links */}
      <div
        className={`flex flex-col lg:flex-row lg:items-end lg:gap-4 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 overflow-hidden lg:overflow-visible
        ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-full"
        }
      `}
      >
        {["About", "Skills", "Projects", "Github", "Education", "Experience", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="gsap px-4 py-2 border-b-2 border-transparent hover:border-green-400 transition-all duration-300 "
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          )
        )}
        <button
          onClick={() => {
            handleResumeClick();
            setMenuOpen(false);
          }}
          className="gsap1 px-4 py-2 bg-green-500 text-white rounded hover:rounded-full hover:cursor-pointer hover:bg-green-600 transition lg:ml-2"
        >
          Resume
        </button>
      </div>
    </nav>
  );
};
