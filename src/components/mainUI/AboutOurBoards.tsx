import { Card, CardContent } from "../ui/card";
import SubHeading from "../ui/SubHeading";
import Link from "next/link";

export default function AboutOurBoards() {
  const values = [
    {
      title: "Programs & Initiatives Board",
      description:
        "Designs and leads all student-facing initiatives, from research programs to competitions and workshops. Coordinates logistics, timelines, and smooth execution.",
    },
    {
      title: "Outreach & Partnerships Board",
      description:
        "Builds relationships with schools, student communities, and potential collaborators. Spreads the word and brings new voices into the movement.",
    },
    {
      title: "Social Media & Communications Board",
      description:
        "Manages our online presence, storytelling, design, and community engagement across platforms.",
    },
    {
      title: "Tech & Digital Infrastructure Board",
      description:
        "Develops and maintains our website and digital infrastructure. Ensures everything we do is accessible and beautifully presented online.",
    },
  ];

  return (
    <section className="py-20 bg-ourLightBlue w-full">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SubHeading text="Our Boards" />
            <p className="text-xl text-ourGray leading-relaxed">
              These boards aren't just about titles - they're about{" "}
              <strong>impact, initiative, and teamwork</strong>.
            </p>
          </div>
          {/* cards layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {values.map((value, index) => {
              return (
                <Card
                  key={index}
                  className="relative pt-5 pb-[70px] px-[2px] text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardContent className="space-y-6">
                    <div className="flex justify-center"></div>
                    <h3 className="text-2xl font-bold text-ourDarkestBlue">
                      {value.title}
                    </h3>
                    <p className="text-ourGray leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>

                  <Link
                    href=""
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[150px] rounded-full py-1 px-2 ${
                      index % 2 === 0
                        ? "bg-ourSkyBlue hover:bg-[#00acc1]"
                        : "bg-[#ff9800] hover:bg-[#e68900]"
                    } text-white`}
                  >
                    Join Board
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
