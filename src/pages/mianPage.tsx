import AboutMe from "@/components/aboutMe";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";


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
      
      <Footer/>
    </div>
  );
};

export default MianPage;
