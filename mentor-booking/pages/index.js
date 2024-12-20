import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Tabs from "../components/Tabs";
import BackgroundSection from "../components/BackgroundSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import StatisticsSection from "../components/StatisticsSection";
import SessionSection from "../components/SessionSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white p-4">
      <div className="flex flex-col justify-between">
      <Header />
      <HeroSection />
      <Tabs />
      </div>
      
      <div className="container flex mx-auto px-6 justify-evenly w-auto bg-white">
        <div>
        
        <BackgroundSection />
        <ExperienceSection />
        <EducationSection />
        </div>
        <div>
        <StatisticsSection />
        <SessionSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
