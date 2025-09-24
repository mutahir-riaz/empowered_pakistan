"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ExternalLink, Users, Award } from "lucide-react";
import SubHeading from "../ui/SubHeading";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import React, { useEffect, useState } from "react";
import eventsData from "@/data/events";

export default function EventsPast() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  interface Event {
    _id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    type: string;
    description: string;
    image: string;
    tags?: string[]; // Optional for past events
    registrationOpen?: boolean; // Optional for past events
    outcome?: string; // Only for past events
    participants?: number; // Only for past events
    isPast: boolean;
  }

  interface EventsData {
    upcomingEvents: Event[];
    pastEvents: Event[];
  }

  const [events, setEvents] = useState<EventsData>({
    upcomingEvents: [],
    pastEvents: [],
  });

  const fetchEvents = async () => {
    try {
      const fetchedData = await fetch("/api/events");
      const fetchedEvents = await fetchedData.json();
      console.log("fetchedEvents: ", fetchedEvents);
      if (Array.isArray(fetchedEvents)) {
        const upcomingEvents = fetchedEvents.filter((event) => {
          if (event.isPast === false) {
            return event;
          }
        });
        const pastEvents = fetchedEvents.filter((event) => {
          if (event.isPast === true) {
            return event;
          }
        });
        setEvents({
          upcomingEvents,
          pastEvents,
        });
      } else {
        console.error(
          "API /api/events did not return an array:",
          fetchedEvents
        );
        setEvents({ upcomingEvents: [], pastEvents: [] });
      }
    } catch (e) {
      console.error("Failed to fetch events:", e);
      setEvents({ upcomingEvents: [], pastEvents: [] });
    } finally {
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <section className="py-20 w-full bg-ourBlue" id="past-events">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <SubHeading text="Past Event Highlights" />
          <p className="text-xl text-ourGray max-w-2xl mx-auto">
            Take a look at the amazing events we've hosted and the impact we've
            made together
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          className="w-full cursor-grab"
          plugins={[plugin.current]}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="min-h-[500px]">
            {events.pastEvents.map((event) => (
              <CarouselItem
                key={event._id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <Card className="overflow-hidden shadow-md pt-0 border-0 select-none">
                  <div className="relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-ourDarkBlue">
                        {event.date}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-ourBlack">
                      {event.title}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-ourGray">
                        <Users className="w-4 h-4 text-ourDarkBlue" />
                        <span>
                          {event.participants} participants • {event.location}
                        </span>
                      </div>

                      <div className="flex items-start gap-2 text-sm text-ourGray">
                        <Award className="w-4 h-4 text-[#FFD662] mt-0.5" />
                        <span>{event.outcome}</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-ourDarkBlue text-ourDarkBlue hover:bg-ourDarkBlue hover:text-white rounded-full transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      See More
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
