import Cards from "@/components/cards";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import AboutMe from "@/components/aboutMe";
import HeroSection from "@/components/heroSection";
import { NavbarDemo } from "@/components/navbar";
import ExperienceSection from "@/components/exp";



const MianPage = () => {
  return (
    <div className="bg-neutral-950 h-full min-h-screen">
      <NavbarDemo />
      <div id="home">
        <HeroSection />
      </div>
       <div id="about">
        <AboutMe />
       <ExperienceSection/>
      </div>
      <div id="projects">
        <Cards />
      </div>
      <div>
        <Skills/>
      </div>
      
      <Footer/> 
    </div>
  );
};

export default MianPage;
