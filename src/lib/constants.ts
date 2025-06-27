export const ExperienceSectionHeading = "Experience";
export const ExperienceSectionSubHeading = "My professional journey and work experience";

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  type: "current" | "previous";
}

export const ExperienceData: Experience[] = [
  {
    company: "DigiMark Developers",
    position: "Web Developer",
    duration: "2025 - Present",
    location: "362 N-Block, Johar Town, Lahore",
    description: "Developed and maintained web applications using modern technologies.",
    technologies: ["React", "TypeScript", "Python", "Django"],
    type: "current"
  },
  {
    company: "Previous Company",
    position: "Junior Developer",
    duration: "2022 - 2023",
    location: "New York, NY",
    description: "Worked on frontend development and user interface improvements.",
    technologies: ["JavaScript", "HTML", "CSS", "React"],
    type: "previous"
  }
]; 


import S1 from "../assets/images/github.png";
import S3 from "../assets/images/bootstrap.png";
import S4 from "../assets/images/chrome.png";
import S6 from "../assets/images/html.png";
import S7 from "../assets/images/javascript.png";
import S8 from "../assets/images/react.png";
import S9 from "../assets/images/css.png";
import S11 from "../assets/images/typescript.png";
import S10 from "../assets/images/tailwindcss.png";

export const skills = [
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

import project1 from "../assets/images/pro2.png";
import project2 from "../assets/images/pro3.png";
import project3 from "../assets/images/pro4.png";
import project4 from "../assets/images/new.png";
import project5 from "../assets/images/vicross.png";

export const CarcsData = [
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
    img: project4,
    aboutpro:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni distinctio, cum dolores ad beatae repellat cumque nesciunt incidunt nihil ratione nobis voluptates at facere,",
    Projectname:"Keto Smoke",
    number: "02",
    url:'https://keto-smoke.vercel.app/',
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
    img: project2,
    aboutpro:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni distinctio, cum dolores ad beatae repellat cumque nesciunt incidunt nihil ratione nobis voluptates at facere,",
   Projectname:"Provante Pharma",
    number: "04",
    url:'https://www.provantapharma.com/',
  },
  {
    id: 5,
    img: project5,
    aboutpro:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni distinctio, cum dolores ad beatae repellat cumque nesciunt incidunt nihil ratione nobis voluptates at facere,",
    Projectname: "Vi Cross",
    number: "05",
    url:'https://vi-cross-login-2cgo.vercel.app/',
  },
];




export const Social_Link_Data = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rehan-siddique-37916b344/",
  },
  {
    id: 2,
    name: "FaceBook",
    url: "https://www.facebook.com/profile.php?id=100073708785319",
  },
  {
    id: 3,
    name: "GitHub",
    url: "https://github.com/rehansiddique12",
  },
];
