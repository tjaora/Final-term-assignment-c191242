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
          {/* Section Header */}
          <h2 className="mt-8 text-lg font-bold mb-4 text-black ">Background</h2>
        <BackgroundSection />
        <h3 className="mt-8 text-lg font-bold mb-2 text-black">Experiences</h3>
        <ExperienceSection />
        <h3 className="mt-8 text-lg font-bold mb-4 text-black">Educations</h3>
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
