import { CarcsData } from "@/lib/constants";
import MaxWidthWrapper from "./max-width-wrapper";

const Cards = () => {
  return (
    <div className="px-5 lg:p-20" id="Projects">
      <MaxWidthWrapper>
        <div>
          <div className="flex flex-col items-center justify-center relative">
            <span className="bg-gradient-to-l to-orange-700 from-purple-700  font-semibold text-transparent bg-clip-text text-2xl md:text-3xl lg:text-5xl font-myMainFont pt-24 text-center">
              My Recent Work
            </span>

            <p className="text-white pb-10 mt-3 text-center w-1/2">
              I've recently built modern web apps using React, TypeScript, Redux
              Toolkit, and shadcn/ui, focusing on clean design, smooth API
              integration, and responsive user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center ">
            {CarcsData.map((item) => (
              <div
                key={item.id}
                className="group relative inline-block w-96 h-72 overflow-hidden rounded-xl border-2 border-gray-600"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay Text */}
                <p className="absolute hidden group-hover:block top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-[14px] w-full px-4 z-50">
                  {item.aboutpro}
                </p>

                {/* Tooltip & Button */}
                <div className="absolute mt-28 inset-0 hover:mt-28 flex flex-col items-center justify-center text-zinc-600 text-sm font-bold z-30 pointer-events-none">
                  <div className="group/youtube relative flex flex-col items-center pointer-events-auto">
                    <div className="absolute bottom-full mb-2 opacity-0 scale-95 translate-y-2 group-hover/youtube:opacity-100 group-hover/youtube:scale-100 group-hover/youtube:translate-y-0 transition-all duration-300 ease-out">
                      <div className="bg-gradient-to-l  to-orange-700 from-purple-700  text-sm px-3 py-1 rounded shadow text-white">
                        Code With Creativity
                      </div>
                      <div className="w-2 h-2 bg-gradient-to-l  to-orange-700 from-purple-700 rotate-45 absolute left-1/2 -translate-x-1/2 top-full "></div>
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      className="flex text-white items-center gap-0 group-hover/youtube:gap-2 bg-gradient-to-l  to-orange-700 from-purple-700 p-3 rounded-full cursor-pointer transition-all duration-300"
                    >
                      <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="text-[0px] group-hover/youtube:text-sm transition-all duration-300">
                        Check Our Live View
                      </span>
                    </a>
                  </div>
                </div>

                {/* Sliding Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-500 translate-y-full group-hover:translate-y-7 rounded-2xl transition-transform duration-700 ease-out opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Cards;
