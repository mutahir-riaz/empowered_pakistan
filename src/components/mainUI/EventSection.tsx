import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  Award,
  Users,
} from "lucide-react";
import SubHeading from "../ui/SubHeading";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function EventsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true })
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

  useEffect(() => {
    console.log("events: ", events);
  }, [events]);
  return (
    <section className="py-20 w-full bg-ourBlue">
      <div className="container mx-auto px-6 space-y-10">
        <SubHeading text="Events" />
        <Tabs defaultValue="upcoming" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white">
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-ourSkyBlue data-[state=active]:text-white"
            >
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="data-[state=active]:bg-ourSkyBlue data-[state=active]:text-white"
            >
              Past Events
            </TabsTrigger>
          </TabsList>
          {/* --------------------- UPCOMING EVENTS --------------------- */}
          <TabsContent value="upcoming">
            {events.upcomingEvents.length > 0 ? (
              <Carousel
                className="w-full cursor-grab"
                plugins={[plugin.current]}
                onMouseEnter={() => plugin.current.stop()}
                onMouseLeave={() => plugin.current.play()}
              >
                <CarouselContent className="min-h-[550px]">
                  {events.upcomingEvents.map((event, ind) => (
                    <CarouselItem
                      key={event._id}
                      className="md:basis-1/2 lg:basis-1/3 pl-4"
                    >
                      <Card
                        key={ind}
                        className="overflow-hidden shadow-md border-0 relative select-none pt-0"
                      >
                        <div className="relative">
                          <Image
                            src={event.image}
                            alt={event.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                            {event.tags!.map((tag, index) => (
                              <Badge
                                key={index}
                                className="px-2 py-1 text-xs font-medium bg-ourOrange text-white"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <CardContent className="p-6 space-y-4">
                          <h3 className="text-xl font-bold text-ourDarkestBlue">
                            {event.title}
                          </h3>

                          <div className="space-y-2 text-sm text-ourGray">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-ourDarkBlue" />
                              <span>
                                {new Date(event.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-ourDarkBlue" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-ourDarkBlue" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <p className="text-ourGray text-sm leading-relaxed">
                            {event.description}
                          </p>

                          <Button
                            className="w-48 rounded-full transition-all duration-300 bg-ourSkyBlue hover:bg-ourDarkBlue text-white absolute bottom-3 left-1/2 -translate-x-1/2 "
                            disabled={!event.registrationOpen}
                          >
                            {event.registrationOpen
                              ? "Register Now"
                              : "Registration Closed"}
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            ) : (
              <div className="w-fit mx-auto py-10">No Upcoming Events</div>
            )}
          </TabsContent>
          {/* --------------------- PAST EVENTS --------------------- */}
          <TabsContent value="past">
            {events.pastEvents.length > 0 ? (
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
                      <Card className="overflow-hidden shadow-md border-0 select-none pt-0">
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
                                {event.participants} participants •{" "}
                                {event.location}
                              </span>
                            </div>

                            <div className="flex items-start gap-2 text-sm text-ourGray">
                              <Award className="w-4 h-4 text-ourOrange mt-0.5" />
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
              </Carousel>
            ) : (
              <div className="w-fit mx-auto py-10">No Past Events</div>
            )}
          </TabsContent>
          <Button
            size="lg"
            className="w-fit mx-auto bg-ourDarkBlue hover:bg-ourDarkBlue/90 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2 cursor-pointer"
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </Tabs>
      </div>
    </section>
  );
}
