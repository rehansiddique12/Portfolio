import { ArrowUpRight } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";

const AboutMe = () => {
  return (
    <div className="text-2xl text-white px-5 md:px-0 py-16 lg:pt-32">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full bg-red-4 px-2 lg:px-20 ">
            <p className="text-4xl md:text-6xl font-myNameFont ">
              Web Developer Crafting Modern, Responsive Interfaces
            </p>
            <a 
              href="https://wa.me/923247848493" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="group mt-10 hidden md:flex relative  items-center gap-2 px-6 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:border-gray-600/50 hover:shadow-lg hover:shadow-gray-900/25">
                <span className="relative z-10">Contact Us</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                {/* Sliding background */}
                <div className="absolute inset-0 bg-gradient-to-l from-purple-600 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              </button>
            </a>
          </div>
          <div className="w-full bg-blue- font-myNameFont px-2 md:px-5 lg:px-20">
            <p className="lg:text-justify  text-[20px] text-gray-300">
              I specialize in using React with TypeScript and Tailwind CSS to
              create clean and efficient user interfaces. Currently, I'm
              expanding my knowledge by learning API integration to enhance the
              functionality of my applications. In addition to frontend
              development, I've begun exploring backend technologies, starting
              with Python. I'm diving deeper into Django for web development and
              using Pandas for data manipulation and analysis. By continuously
              improving my skills
            </p>
          </div>
          <div className="flex justify-start pl-2">
          <a 
              href="https://wa.me/923247848493" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="group mt-5 md:mt-10 md:hidden relative inline-flex items-center gap-2 px-6 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:border-gray-600/50 hover:shadow-lg hover:shadow-gray-900/25">
                <span className="relative z-10">Contact Us</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                {/* Sliding background */}
                <div className="absolute inset-0 bg-gradient-to-l from-purple-600 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              </button>
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutMe;
