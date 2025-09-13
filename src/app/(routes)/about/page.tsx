import AboutHeroSection from "@/components/mainUI/AboutHeroSection";
import AboutHowDoWeWork from "@/components/mainUI/AboutHowDoWeWork";
import AboutMissionVision from "@/components/mainUI/AboutMissionVision";
import AboutOurBoards from "@/components/mainUI/AboutOurBoards";
import AboutSubFooter from "@/components/mainUI/AboutSubFooter";
import AboutWhatDoWeDo from "@/components/mainUI/AboutWhatDoWeDo";
import PageHeader from "@/components/mainUI/PageHeader";
import React from "react";

const About = () => {
  return (
    <main>
      <PageHeader heading="About Us" title="about" />
      <AboutHeroSection />
      <AboutMissionVision />
      <AboutWhatDoWeDo />
      <AboutHowDoWeWork />
      <AboutOurBoards />
      <AboutSubFooter />
    </main>
  );
};

export default About;
