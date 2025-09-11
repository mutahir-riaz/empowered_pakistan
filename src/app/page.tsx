"use client";
import { EventsSection } from "@/components/mainUI/EventSection";
import OppurtunitiesSection from "@/components/mainUI/OpportunitiesSection";
import GallerySection from "@/components/mainUI/GallerySection";
import Hero from "@/components/mainUI/Hero";
import HomeSubFooter from "@/components/mainUI/HomeSubFooter";
import ImpactNumbers from "@/components/mainUI/ImpactNumber";
import MissionVision from "@/components/mainUI/MissionVision";
import { TeamSection } from "@/components/mainUI/TeamSection";
import Testimonail from "@/components/mainUI/Testimonial";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <Hero />
      <MissionVision />
      <ImpactNumbers />
      <Testimonail />
      <TeamSection />
      <OppurtunitiesSection />
      <EventsSection />
      <GallerySection />
      <HomeSubFooter />
    </div>
  );
};

export default Page;
