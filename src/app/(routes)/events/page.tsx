"use client";
import EventsHero from "@/components/mainUI/EventsHero";
import EventsPast from "@/components/mainUI/EventsPast";
import EventsSubFooter from "@/components/mainUI/EventsSubFooter";
import EventsUpcoming from "@/components/mainUI/EventsUpcoming";
import React from "react";

const Events = () => {
  return (
    <main>
      <EventsHero />
      <EventsUpcoming />
      <EventsPast />
      <EventsSubFooter />
    </main>
  );
};

export default Events;
