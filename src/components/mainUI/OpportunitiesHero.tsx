"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import Heading from "../ui/Heading";
import { Target } from "lucide-react";

export default function OppurtunitiesHero() {
  const scrollToAllOppurtunities = () => {
    const element = document.getElementById("all-oppurtunities");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-ourBlue overflow-hidden">
      {/* main container */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-8 h-8 text-ourDarkBlue" />
                <span className="text-ourDarkBlue font-semibold">
                  Your Future Starts Here
                </span>
              </div>

              <Heading
                text="Explore Your Future Opportunities"
                colorLastWord={true}
                className="!text-left"
              />

              <p className="text-xl text-ourGray leading-relaxed max-w-2xl">
                Curated programs, competitions, and scholarships for ambitious
                students like you. Discover opportunities that match your dreams
                and aspirations.
              </p>
            </div>
            <Button
              onClick={scrollToAllOppurtunities}
              className="w-48 rounded-full transition-all duration-300 bg-ourSkyBlue hover:bg-ourDarkBlue text-white "
            >
              View All Oppurtunities
              <ArrowDown className="w-4 h-4" />
            </Button>
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
