import MaxWidthWrapper from "./max-width-wrapper";
import project1 from "../assets/images/pro2.png";
import project2 from "../assets/images/pro3.png";
import project3 from "../assets/images/pro4.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const buttonsData = [
  {
    id: 1,
    img: project1,
    aboutpro:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni distinctio, cum dolores ad beatae repellat cumque nesciunt incidunt nihil ratione nobis voluptates at facere,",
    Projectname: "Estimaitor",
    number: "01",
    url:'https://estim-aitor.vercel.app/auth/login',
  },
  {
    id: 2,
    img: project2,
    aboutpro:
      "A digital platform for Provanta Pharma, focused on managing and showcasing veterinary medicines. The system streamlines operations and supports animal health through reliable pharma solutions.",
    Projectname:"Provante Pharma",
    number: "02",
    url:'https://www.provantapharma.com/',
  },
  {
    id: 3,
    img: project3,
    aboutpro:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni distinctio, cum dolores ad beatae repellat cumque nesciunt incidunt nihil ratione nobis voluptates at facere,",
    Projectname: "Rehman Contractors",
    number: "03",
    url: 'https://www.rehmancontractors.com.pk/',
  },
  {
    id: 4,
    img: project1,
    aboutpro:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni distinctio, cum dolores ad beatae repellat cumque nesciunt incidunt nihil ratione nobis voluptates at facere,",
    Projectname: "TrueMail",
    number: "04",
  },
  {
    id: 5,
    img: project1,
    aboutpro:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni distinctio, cum dolores ad beatae repellat cumque nesciunt incidunt nihil ratione nobis voluptates at facere,",
    Projectname: "Trending",
    number: "05",
  },
];
const Cards = () => {
  return (
    <div className=" p-20">
      <MaxWidthWrapper>
        <div>
          <div className="flex items-center justify-between relative">
            <p className="text-white text-5xl font-myMainFont pb-10">
              PROJECTS
            </p>
          </div>

          <Carousel className="w-full ">
            <CarouselContent>
              {buttonsData.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 ">
                  <div className="p-1">
                    <Card>
                      <CardContent className="h-[300px] relative ">
                        <a href={item.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block">
                          <div className="absolute top-0 bottom-0 z-[2] bg-red-30 backdrop-blur-3xl p-8 flex flex-col justify-between ">
                            <div className="flex flex-row gap-8 justify-center items-center">
                              <img
                                src={item.img}
                                alt=""
                                className="h-40 w-72 rounded-3xl"
                              />
                              <p className="text-white ">{item.aboutpro}</p>
                            </div>

                            <div className="flex justify-between">
                              <p className="text-4xl text-white">
                                {item.Projectname}
                              </p>
                              <p className="text-gray-400 text-4xl">
                                {item.number}{" "}
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
            <div className="absolute -top-16 left-[95%] right-30  ">
              <CarouselPrevious className="bg-[#0a0a2e] border  cursor-none " />
              <CarouselNext className=" bg-[#0a0a2e]  border  cursor-none " />
            </div>
          </Carousel>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Cards;
