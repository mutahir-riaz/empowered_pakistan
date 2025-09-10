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
} from "@/components/ui/Carousel";
import React from "react";

const pastEvents = [
  {
    id: 1,
    title: "Leadership Summit 2023",
    date: "December 2023",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
    outcome: "250+ students empowered with leadership skills",
    participants: 250,
    location: "Karachi",
  },
  {
    id: 2,
    title: "Digital Skills Workshop",
    date: "November 2023",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    outcome: "180 students learned essential digital skills",
    participants: 180,
    location: "Lahore",
  },
  {
    id: 3,
    title: "Scholarship Fair",
    date: "October 2023",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
    outcome: "90% participants found suitable scholarships",
    participants: 300,
    location: "Islamabad",
  },
  {
    id: 4,
    title: "Career Mentorship Day",
    date: "September 2023",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
    outcome: "150+ mentorship connections formed",
    participants: 200,
    location: "Online",
  },
  {
    id: 5,
    title: "Youth Innovation Challenge",
    date: "August 2023",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
    outcome: "50 innovative project ideas presented",
    participants: 120,
    location: "Karachi",
  },
];

export default function EventsPast() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 w-full bg-ourBlue">
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
          <CarouselContent>
            {pastEvents.map((event) => (
              <CarouselItem
                key={event.id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <Card className="overflow-hidden border-0 select-none">
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
