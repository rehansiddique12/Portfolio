import del2 from "../assets/images/crop.png";
import { Animatedbutton } from "./animatedArrow";
import { ArrowUpRight, WrapText } from "lucide-react";
import { X } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, _] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
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
        <div className="py-4 hidden lg:flex flex-row items-center justify-between">
          <div className="w-96 flex items-center">
            <img
              src={del2}
              alt=""
              className="h-14 w-14 rounded-full ml-4 mr-4"
            />
            <a
              href="/"
              className="text-3xl text-white font-semibold font-myMainFont relative cursor-pointer"
            >
              <span className="relative z-10 ">M.REHAN</span>
              <span className="absolute inset-0 blur-[8px] bg-white/30 rounded-lg -z-10 animate-pulse"></span>
              <span className="absolute inset-0 blur-[15px] bg-white/20 rounded-lg -z-20"></span>
            </a>
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

      {/* Mobile Nav */}

      <MaxWidthWrapper>
        <div className="lg:hidden px-4 flex justify-between items-center h-20 ">
          <div className=" flex items-center">
            <img src={del2} alt="" className="h-10 w-10 rounded-full mr-1" />
            <a
              href="/"
              className="text-lg text-white font-semibold font-myMainFont relative cursor-pointer"
            >
              <span className="relative z-10 ">M.REHAN</span>
              <span className="absolute inset-0 blur-[8px] bg-white/30 rounded-lg -z-10 animate-pulse"></span>
              <span className="absolute inset-0 blur-[15px] bg-white/20 rounded-lg -z-20"></span>
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="bg-white/20 p-2 text-white rounded-xl cursor-pointer">
                  {isOpen ? (
                    <X className="text-white" />
                  ) : (
                    <WrapText className="text-white " />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52 mt-5 mr-5 backdrop-blur-3xl bg-transparent text-white">
                <DropdownMenuItem className="hover:bg-red-500">
                  Home
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Porjects</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="https://wa.me/923247848493"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="group relative inline-flex items-center gap-2 px-2 py-3 bg-transparent backdrop-blur-sm border border-gray-700/50 rounded-full text-white font-medium text-[14px] overflow-hidden transition-all duration-300 hover:border-gray-600/50 hover:shadow-lg hover:shadow-gray-900/25">
                <span className="relative z-10">Let's Talk</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                {/* Sliding background */}
                <div className="absolute inset-0 bg-gradient-to-l from-purple-600 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              </button>
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
