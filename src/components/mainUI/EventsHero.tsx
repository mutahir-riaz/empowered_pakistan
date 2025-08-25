import Image from "next/image";
import { Button } from "../ui/button";
import { Calendar, ArrowDown } from "lucide-react";
import Heading from "../ui/Heading";

export default function EventsHero() {
  const scrollToUpcomingEvents = () => {
    const element = document.getElementById("upcoming-events");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPastEvents = () => {
    const element = document.getElementById("past-events");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-ourBlue overflow-hidden">
      {/* main container */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Heading
                text="Empowering Students Through Experiences"
                className="text-left"
                colorLastWord={true}
              />
              <p className="text-xl text-ourGray leading-relaxed max-w-2xl">
                Discover impactful events that connect, guide, and inspire
                students across Pakistan. Join us in creating meaningful
                experiences that shape futures.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToUpcomingEvents}
                size="lg"
                className="bg-ourDarkBlue hover:bg-ourDarkBlue/90 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                Upcoming Events
                <ArrowDown className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                onClick={scrollToPastEvents}
                size="lg"
                className="border-2 border-ourDarkBlue text-ourDarkBlue hover:bg-ourDarkBlue hover:text-white px-8 py-4 rounded-full transition-all duration-300 cursor-pointer"
              >
                View Past Events
              </Button>
            </div>
          </div>
          {/* image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/hero.jpg"
                alt="Students at Empowered Pakistan event"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* image background overlay */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-ourOrange/20 rounded-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-ourDarkBlue/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
