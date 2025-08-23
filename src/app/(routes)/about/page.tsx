import AboutHeroSection from "@/components/mainUI/AboutHeroSection";
import AboutHowDoWeWork from "@/components/mainUI/AboutHowDoWeWork";
import { AboutMissionVision } from "@/components/mainUI/AboutMissionVision";
import AboutOurBoards from "@/components/mainUI/AboutOurBoards";
import AboutSubFooter  from "@/components/mainUI/AboutSubFooter";
import React from "react";

const About = () => {
  return (
    <main>
      <AboutHeroSection />
      <AboutMissionVision/>
      <AboutHowDoWeWork/>
      <AboutOurBoards/>
      <AboutSubFooter/>
    </main>
  );
};

export default About;
