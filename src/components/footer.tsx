import { ArrowUpRight } from "lucide-react";
import del2 from "../assets/images/me2.png";
import MaxWidthWrapper from "./max-width-wrapper";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex flex-col justify-center items-center pt-20">
          <p className="text-white font-myMainFont text-7xl  inline-flex text-center ">
            LET'S
            <img
              src={del2}
              alt=""
              className=" h-20 w-20 rounded-full ml-4 mr-4"
            />
            CREATE
          </p>
          <p className="text-white font-myMainFont text-7xl  inline-flex text-center mt-6">
            GREAT THINGS.
          </p>
          <a
            href="https://wa.me/923247848493"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="group mt-10 relative inline-flex items-center gap-2 px-6 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:border-gray-600/50 hover:shadow-lg hover:shadow-gray-900/25">
              <span className="relative z-10">Drop me a line</span>
              <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

              {/* Sliding background */}
              <div className="absolute inset-0 bg-gradient-to-l from-purple-600 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
            </button>
          </a>
        </div>

        <div className="py-6 mt-20  ">
          <Separator className="bg-gray-500 " />
          <div className="flex h-5 items-center space-x-4 text-sm text-white">
            <a href="https://www.linkedin.com/in/rehan-siddique-37916b344/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block">
            <button className="group hover:text-blue-400 mt-10 relative inline-flex items-center gap-1 px-4 py-3 rounded-full text-white font-medium text-xl font-myMainFont overflow-hidden transition-all duration-300 ">
              <span className="relative z-10">LinkedIn</span>
              <ArrowUpRight className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            </a>

            <button className="group hover:text-blue-500 mt-10 relative inline-flex items-center gap-1 px-4 py-3 rounded-full text-white font-medium text-xl font-myMainFont overflow-hidden transition-all duration-300 ">
              <span className="relative z-10">FaceBook</span>
              <ArrowUpRight className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button className="group mt-10 relative inline-flex items-center gap-1 px-4 py-3 rounded-full text-white font-medium text-xl font-myMainFont overflow-hidden transition-all duration-300">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#E1306C]">
                Instagram
              </span>
              <ArrowUpRight className="w-6 h-6 relative z-10  transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#E1306C]" />
            </button>

            <button className="group hover:text-blue-950 mt-10 relative inline-flex items-center gap-1 px-4 py-3 rounded-full text-white font-medium text-xl font-myMainFont overflow-hidden transition-all duration-300 ">
              <span className="relative z-10">GitHub</span>
              <ArrowUpRight className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
          <div className="">
            <p className="text-gray-400 text-xl text-end">
              Personal Portfolio © 2025
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
