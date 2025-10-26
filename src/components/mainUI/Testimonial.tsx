import { Card, CardContent } from "../ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import Image from "next/image";
import SubHeading from "../ui/SubHeading";

export default function Testimonail() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmad Hassan",
      role: "Volunteer & Engineering Student",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      feedback:
        "Volunteering with Empowered Pakistan has been incredibly rewarding. Seeing the impact we make on students' lives motivates me to do more for my community.",
      event: "Leadership Summit 2023",
    },
    {
      id: 2,
      name: "Fatima Ahmed",
      role: "Computer Science Student",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",

      feedback:
        "The mentorship program connected me with an amazing mentor who guided me through my career decisions. I landed my dream internship thanks to Empowered Pakistan!",
      event: "Virtual Mentorship Program",
    },
    {
      id: 3,
      name: "Muhammad Ali",
      role: "Tech Enthusiast",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      feedback:
        "The tech skills bootcamp introduced me to coding and opened up a whole new world of possibilities. I'm now pursuing a career in software development.",
      event: "Tech Skills Bootcamp",
    },
    {
      id: 4,
      name: "Zara Khan",
      role: "Business Student",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      feedback:
        "The scholarship workshop was a game-changer for me. I learned how to write compelling essays and prepared for interviews. Now I'm studying abroad with a full scholarship!",
      event: "Scholarship Application Workshop",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-ourLightBlue w-full">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SubHeading text="Voices from the Field" />
          <p className="text-xl text-ourGray max-w-2xl mx-auto">
            Hear what our students and volunteers have to say about their
            experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 py-5">
                  <Card className="mx-4 p-8 shadow-lg border-0 bg-white">
                    <CardContent className="text-center space-y-6">
                      <div className="flex justify-center">
                        <Quote className="w-12 h-12 text-ourDarkBlue" />
                      </div>

                      <blockquote className="text-xl text-ourGray leading-relaxed italic max-w-2xl mx-auto">
                        "{testimonial.feedback}"
                      </blockquote>

                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#FFD662]">
                          <Image
                            width={50}
                            height={50}
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-xl font-bold text-black">
                            {testimonial.name}
                          </h4>
                          <p className="text-ourDarkBlue font-medium">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-ourGray">
                            {testimonial.event}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-[#2E8BC0] text-[#2E8BC0] hover:bg-[#2E8BC0] hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-[#2E8BC0] text-[#2E8BC0] hover:bg-[#2E8BC0] hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#2E8BC0]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
