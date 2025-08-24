import { Card, CardContent } from "../ui/card";
import { BookOpen, Link, Layers } from "lucide-react";
import SubHeading from "../ui/SubHeading";

export default function AboutWhatDoWeDo() {
  const values = [
    {
      icon: BookOpen,
      title: "Counseling Students",
      description:
        "Providing guidance to help them make informed academic and career choices.",
    },
    {
      icon: Link,
      title: "Connecting Students with Opportunities",
      description:
        "Linking them to scholarships, competitions, and programs that enable them to excel both academically and professionally.",
    },
    {
      icon: Layers,
      title: "Creating Opportunities to Bridge Gaps",
      description:
        "Designing and implementing initiatives that address unmet educational needs.",
    },
  ];
  return (
    <section className="py-20 w-full bg-ourBlue">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SubHeading text="What Do We Do"/>
            <p className="text-xl text-ourGray">
              The principles that drive our mission and guide our actions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardContent className="space-y-6">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-ourBlue">
                        <IconComponent className="w-12 h-12 text-ourDarkestBlue" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-ourDarkestBlue">
                      {value.title}
                    </h3>
                    <p className="text-ourGray leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
