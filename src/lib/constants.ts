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