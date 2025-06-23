import { Social_Link_Data } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Me from "../assets/images/me2.png";
import MaxWidthWrapper from "./max-width-wrapper";
import { Separator } from "@/components/ui/separator";



const Footer = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex flex-col justify-center items-center pt-32">
          <p className="text-white font-myMainFont text-4xl md:text-5xl lg:text-7xl  inline-flex text-center ">
            VISION
            <img
              src={Me}
              alt=""
              className="h-12 w-12 lg:h-20 lg:w-20 rounded-full ml-4 mr-4"
            />
            TURNING
          </p>
          <p className="text-white font-myMainFont text-4xl md:text-5xl lg:text-7xl  inline-flex text-center mt-6">
            INTO REALITY.
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

        <div className="p-6 md:py-6 mt-20">
          <Separator className="bg-gray-500" />
          <div className="flex h-5 items-center lg:space-x-4 text-white ">
            {Social_Link_Data.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="group hover:text-blue-400 mt-12 relative inline-flex items-center gap-1 px-2 lg:px-4 lg:py-3 rounded-full text-white font-medium md:text-xl font-myMainFont overflow-hidden transition-all duration-300 ">
                  <span className="relative z-10">{item.name}</span>
                  <ArrowUpRight className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <p className="text-gray-400  text-xl text-end">
              Personal Portfolio © 2025
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
