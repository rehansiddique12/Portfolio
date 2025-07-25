import { CarcsData } from "@/lib/constants";
import MaxWidthWrapper from "./max-width-wrapper";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const Cards = () => {
  return (
    <div className="px-5 lg:p-20">
      <MaxWidthWrapper>
        <div>
          <div className="flex items-center justify-between relative ">
            <p className="text-white text-2xl md:text-3xl lg:text-5xl font-myMainFont pt-32 pb-10">
              My Recent Work
            </p>
          </div>

          <Carousel className="w-full ">
            <CarouselContent>
              {CarcsData.map((item) => (
                <CarouselItem key={item.id} className="xl:basis-1/2 ">
                  <div className="p-1">
                    <Card>
                      <CardContent className=" h-[420px] xl:h-[300px] relative ">
                        <a href={item.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block">
                          <div className="absolute top-0 bottom-0 z-[2] backdrop-blur-3xl p-8 flex flex-col justify-between ">
                            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                              <img
                                src={item.img}
                                alt=""
                                className="h-30 md:h-50 lg:h-40 md:w-64 lg:w-72 rounded-3xl"
                              />
                              <p className="text-white text-center md:text-justify">{item.aboutpro}</p>
                            </div>

                            <div className="flex justify-between">
                              <p className=" text-3xl lg:text-4xl text-white">
                                {item.Projectname}
                              </p>
                              <p className="text-gray-400 text-4xl">
                                {item.number}
                              </p>
                            </div>
                          </div>

                          <div className="absolute top-60 left-0 right-0 mx-auto h-96 w-[500px] rounded-full bg-gradient-to-l to-orange-700 from-purple-700" />
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -top-14 lg:-top-16 left-[84%] lg:left-[95%] lg:right-30">
              <CarouselPrevious className="bg-[#0a0a2e]" />
              <CarouselNext className=" bg-[#0a0a2e]" />
            </div>
          </Carousel>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Cards;
