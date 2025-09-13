import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import SubHeading from "../ui/SubHeading";
import eventsData from "@/data/events";

export default function EventsUpcoming() {
  return (
    <section id="upcoming-events" className="py-20 w-full bg-ourLightBlue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SubHeading text="Upcoming Events" />
          <p className="text-xl text-ourGray max-w-2xl mx-auto">
            Don't miss out on these exciting opportunities to learn, network,
            and grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {eventsData.upcoming.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden shadow-lg hover:shadow-xl border-0 relative pt-0"
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
                  {event.tags.map((tag, index) => (
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
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
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
          ))}
        </div>
      </div>
    </section>
  );
}
