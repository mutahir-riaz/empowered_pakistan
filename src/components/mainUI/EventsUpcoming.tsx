import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import SubHeading from "../ui/SubHeading";

export default function EventsUpcoming() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Career Guidance Workshop",
      date: "2024-02-15",
      time: "2:00 PM - 5:00 PM",
      location: "Karachi University",
      description:
        "Interactive session with industry professionals to guide students in career planning and skill development.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      tags: ["In-Person", "Free", "Career"],
      registrationOpen: false,
    },
    {
      id: 2,
      title: "Virtual Mentorship Program Launch",
      date: "2024-02-20",
      time: "7:00 PM - 8:30 PM",
      location: "Online (Zoom)",
      description:
        "Launch event for our new virtual mentorship program connecting students with experienced professionals.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      tags: ["Virtual", "Free", "Mentorship"],
      registrationOpen: true,
    },
    {
      id: 3,
      title: "Scholarship Application Workshop",
      date: "2024-02-25",
      time: "10:00 AM - 3:00 PM",
      location: "Lahore Community Center",
      description:
        "Comprehensive workshop on finding and applying for scholarships, including essay writing tips and interview preparation.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      tags: ["In-Person", "Free", "Scholarship"],
      registrationOpen: true,
    },
    {
      id: 4,
      title: "Tech Skills Bootcamp",
      date: "2024-03-01",
      time: "9:00 AM - 6:00 PM",
      location: "Islamabad Tech Hub",
      description:
        "Intensive one-day bootcamp covering essential tech skills including coding basics, digital literacy, and online tools.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
      tags: ["In-Person", "Tech", "Skills"],
      registrationOpen: true,
    },
  ];

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
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden shadow-lg hover:shadow-xl border-0 relative"
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
