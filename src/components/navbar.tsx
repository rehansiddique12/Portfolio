import del2 from "../assets/images/crop.png";
import { Animatedbutton } from "./animatedArrow";
import MaxWidthWrapper from "./max-width-wrapper";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
  ];

  return (
    <nav className="fixed w-full z-[50] backdrop-blur-sm">
      <MaxWidthWrapper>
        <div className="py-4 flex flex-row items-center justify-between">
          <div className="w-96 flex items-center">
            <img src={del2} alt="" className="h-14 w-14 rounded-full ml-4 mr-4"/>
            <p className="text-3xl text-white font-semibold font-myMainFont relative">
              <span className="relative z-10">M.REHAN</span>
              <span className="absolute inset-0 blur-[8px] bg-white/30 rounded-lg -z-10 animate-pulse"></span>
              <span className="absolute inset-0 blur-[15px] bg-white/20 rounded-lg -z-20"></span>
            </p>
          </div>
          <div className="font-myMainFont">
            <ul className="flex gap-4 text-[#9EABB9] px-2.5 py-2 justify-center items-center">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`relative px-2.5 py-1.5 rounded-full text-md transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white"
                      : "hover:text-white hover:bg-white/20"
                  }`}
                >
                  <a href={item.href} className="block relative z-10">
                    {item.label}
                  </a>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-orange-600/20 rounded-full animate-pulse" />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-96">
            <Animatedbutton />
          </button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
