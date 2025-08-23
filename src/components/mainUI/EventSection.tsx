import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Calendar, MapPin, Clock } from "lucide-react";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";

export function EventsSection() {
  const upcomingEvents = [
    {
      name: "Leadership Skills Webinar",
      date: "January 25, 2025",
      time: "2:00 PM EST",
      location: "Online",
      type: "webinar",
    },
    {
      name: "Community Cleanup Day",
      date: "February 8, 2025",
      time: "9:00 AM EST",
      location: "Central Park, NYC",
      type: "volunteer",
    },
    {
      name: "Peace Building Workshop",
      date: "February 15, 2025",
      time: "10:00 AM EST",
      location: "Online",
      type: "webinar",
    },
    {
      name: "Youth Mentorship Program",
      date: "March 1, 2025",
      time: "Ongoing",
      location: "Various Locations",
      type: "volunteer",
    },
  ];

  const pastEvents = [
    {
      name: "Annual Youth Summit 2024",
      date: "December 10, 2024",
      time: "Full Day",
      location: "Boston, MA",
      type: "conference",
    },
    {
      name: "Conflict Resolution Training",
      date: "November 20, 2024",
      time: "3:00 PM EST",
      location: "Online",
      type: "webinar",
    },
    {
      name: "Food Drive Initiative",
      date: "November 15, 2024",
      time: "8:00 AM EST",
      location: "Multiple Cities",
      type: "volunteer",
    },
  ];

  const renderEventCard = (event: any, isPast: boolean = false) => (
    <Card
      key={event.name}
      className={`shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        isPast ? "opacity-75" : ""
      }`}
    >
      <CardContent className="p-6">
        <h3 className="text-xl mb-3 text-[#0a192f]">{event.name}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            {event.date}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
        </div>

        {!isPast && (
          <Button
            className={`w-full rounded-full ${
              event.type === "webinar"
                ? "bg-ourSkyBlue hover:bg-[#00acc1]"
                : "bg-[#ff9800] hover:bg-[#e68900]"
            } text-white`}
          >
            {event.type === "webinar" ? "Join Webinar" : "Volunteer"}
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 w-full bg-ourBlue">
      <div className="container mx-auto px-6 space-y-10">
        <SubHeading text="Events"/>
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

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingEvents.map((event) => renderEventCard(event))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => renderEventCard(event, true))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
