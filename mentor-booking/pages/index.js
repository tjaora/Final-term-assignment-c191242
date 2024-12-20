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
    <div>
      <Header />
      <HeroSection />
      <div className="container mx-auto px-6">
        <Tabs />
        <BackgroundSection />
        <ExperienceSection />
        <EducationSection />
        <StatisticsSection />
        <SessionSection />
      </div>
      <Footer />
    </div>
  );
}
