import { skills } from "../lib/constants";
import Marquee from "react-fast-marquee";
import MaxWidthWrapper from "./max-width-wrapper";

const Skills = () => {
  return (
    <div className="px-5 pt-32">
      <MaxWidthWrapper>
        <div>
          <p className="text-white text-3xl lg:text-5xl font-myMainFont mb-10">
            Skills & Tools
          </p>
          <Marquee autoFill pauseOnHover gradient gradientColor="black" gradientWidth={60}>
            {skills.map((item) => (
              <div className="p-2 duration-500  hover:scale-105">
                <div
                  key={item.id}
                  className="relative rounded-2xl border border-gray-500 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                >
                  <div className="items-center gap-1 flex flex-row py-2 px-3  overflow-hidden">
                    <img src={item.img} alt="" className="h-10" />
                    <p className="text-xl font-myMainFont text-white">
                      {item.Projectname}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee autoFill direction="right" pauseOnHover gradient gradientColor="black" gradientWidth={60}>
            {skills.map((item) => (
              <div className="p-2 duration-500  hover:scale-105">
                <div
                  key={item.id}
                  className="relative rounded-2xl border border-gray-500 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                >
                  <div className="items-center gap-1 flex flex-row py-2 px-3  overflow-hidden">
                    <img src={item.img} alt="" className="h-10" />
                    <p className="text-xl font-myMainFont text-white">
                      {item.Projectname}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Skills;
