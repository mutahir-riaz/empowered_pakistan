"use client";
import EventsHero from "@/components/mainUI/EventsHero";
import EventsPast from "@/components/mainUI/EventsPast";
import EventsSubFooter from "@/components/mainUI/EventsSubFooter";
import EventsUpcoming from "@/components/mainUI/EventsUpcoming";
import PageHeader from "@/components/mainUI/PageHeader";
import React from "react";

const Events = () => {
  return (
    <main>
      <PageHeader heading="Events" title="events" />
      <EventsHero />
      <EventsUpcoming />
      <EventsPast />
      <EventsSubFooter />
    </main>
  );
};

export default Events;
