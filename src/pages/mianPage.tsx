import Cards from "@/components/cards";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/aboutMe";
import HeroSection from "@/components/heroSection";


const MianPage = () => {
  return (
    <div className="bg-neutral-950 h-full min-h-screen">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
       <div id="about">
        <AboutMe />
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
