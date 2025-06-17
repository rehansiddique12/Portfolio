import S1 from "../assets/images/github.png";
import S3 from "../assets/images/bootstrap.png";
import S4 from "../assets/images/chrome.png";
import S6 from "../assets/images/html.png";
import S7 from "../assets/images/javascript.png";
import S8 from "../assets/images/react.png";
import S9 from "../assets/images/css.png";
import S11 from "../assets/images/typescript.png";
import S10 from "../assets/images/tailwindcss.png";
import Marquee from "react-fast-marquee";
import MaxWidthWrapper from "./max-width-wrapper";

const skills = [
  {
    id: 1,
    img: S1,
    Projectname: "GitHub",
  },

  {
    id: 2,
    img: S3,
    Projectname: "Bootstrap",
  },
  {
    id: 3,
    img: S4,
    Projectname: "Chrome",
  },

  {
    id: 4,
    img: S6,
    Projectname: "Html",
  },
  {
    id: 5,
    img: S7,
    Projectname: "JavaScript",
  },
  {
    id: 6,
    img: S8,
    Projectname: "React",
  },

  {
    id: 8,
    img: S9,
    Projectname: "Css",
  },
  {
    id: 9,
    img: S10,
    Projectname: "TailWindCss",
  },
  {
    id: 7,
    img: S11,
    Projectname: "TypeScript",
  },
];

const Skills = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div>
          <p className="text-white text-5xl font-myMainFont mb-10">
            Skills & Tools
          </p>
          <Marquee autoFill>
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
          <Marquee autoFill direction="right">
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
