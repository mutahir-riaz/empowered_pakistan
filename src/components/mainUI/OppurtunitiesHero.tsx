"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Calendar, ArrowDown } from "lucide-react";
import Heading from "../ui/Heading";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search, Filter, Target } from "lucide-react";

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

            {/* Search Bar */}
            <div className="bg-ourSkyBlue/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ourGray w-5 h-5" />
                  <Input
                    placeholder="Search opportunities..."
                    className="pl-10 bg-white border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-xl focus:border-0 focus:ring-0 focus:outline-none"
                  />
                </div>

                <Select>
                  <SelectTrigger className="bg-white border-0 text-gray-900 py-6 px-5 rounded-xl">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scholarships">Scholarships</SelectItem>
                    <SelectItem value="internships">Internships</SelectItem>
                    <SelectItem value="competitions">Competitions</SelectItem>
                    <SelectItem value="fellowships">Fellowships</SelectItem>
                    <SelectItem value="courses">Online Courses</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-ourOrange hover:bg-ourDarkOrange text-white h-12 rounded-xl font-semibold shadow-lg transition-all duration-300">
                  <Filter className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <Button className="w-48 rounded-full transition-all duration-300 bg-ourSkyBlue hover:bg-ourDarkBlue text-white ">
              View All Oppurtunities
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
