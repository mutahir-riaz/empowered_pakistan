import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Linkedin } from "lucide-react";
import SubHeading from "../ui/SubHeading";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Muhammad Ali",
      role: "Founder & Executive Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Mahad Khan",
      role: "Program Coordinator",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Youth Engagement Specialist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "David Thompson",
      role: "Partnership Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-ourBlue w-full">
      <div className="container mx-auto px-6">
        <SubHeading text="Meet Our Team" className="mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="pt-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-ourDarkBlue mb-1">
                  {member.name}
                </h3>
                <p className="text-ourGray mb-4">{member.role}</p>

                <div className="flex justify-center">
                  <Linkedin className="w-6 h-6 text-ourSkyBlue hover:text-ourDarkBlue cursor-pointer transition-colors duration-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
