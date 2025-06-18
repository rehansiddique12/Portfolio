import MaxWidthWrapper from "./max-width-wrapper";
import { BackgroundBeams } from "./ui/background-beams";
import { PointerHighlight } from "./ui/pointer-highlight";

const HeroSection = () => {
  return (
    <div className="pt-20">
      <BackgroundBeams />
      <MaxWidthWrapper>
        <div className="h-full pt-16 lg:py-30 flex justify-center items-center">
          <p className="text-white text-4xl md:text-5xl lg:text-8xl font-myMainFont md:text-center ">
            HI THERE <br /> I'M{" "}
            <PointerHighlight
              rectangleClassName="bg-white/10 dark:bg-neutral-70  from-orange-500 to-purple-500 leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block mr-1"
            >
              <span className="bg-gradient-to-l  to-orange-700 from-purple-700  font-semibold text-transparent bg-clip-text">
                M.REHAN
              </span>
            </PointerHighlight>{" "}
            <br /> WEB DEVELOPER
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
