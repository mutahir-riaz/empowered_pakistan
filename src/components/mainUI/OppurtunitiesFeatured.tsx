import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Globe, Award, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import SubHeading from "../ui/SubHeading";

const opportunities = [
  {
    id: 1,
    title: "Chevening Scholarships 2024",
    organization: "UK Government",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&fit=crop",
    description:
      "Fully funded master's degree scholarships for future leaders to study in the UK.",
    type: "Scholarship",
    deadline: "Nov 2024",
    location: "United Kingdom",
    featured: true,
  },
  {
    id: 2,
    title: "Google Summer of Code",
    organization: "Google",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
    description:
      "Paid internship program for university students to contribute to open source projects.",
    type: "Internship",
    deadline: "Apr 2024",
    location: "Remote",
    featured: true,
  },
  {
    id: 3,
    title: "USAID Youth Excellence Fund",
    organization: "USAID",
    logo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop",
    description:
      "Grants for innovative youth-led projects addressing development challenges.",
    type: "Fellowship",
    deadline: "Dec 2024",
    location: "Pakistan",
    featured: true,
  },
  {
    id: 4,
    title: "Microsoft Imagine Cup",
    organization: "Microsoft",
    logo: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=100&h=100&fit=crop",
    description:
      "Global technology competition for student developers and entrepreneurs.",
    type: "Competition",
    deadline: "Mar 2024",
    location: "Global",
    featured: true,
  },
  {
    id: 5,
    title: "Coursera Plus Scholarships",
    organization: "Coursera",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
    description:
      "Free access to professional certificates and university courses for underserved students.",
    type: "Online Course",
    deadline: "Ongoing",
    location: "Online",
    featured: false,
  },
  {
    id: 6,
    title: "Fulbright Scholarship Program",
    organization: "US Department of State",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
    description:
      "Educational exchange program offering grants for graduate study in the United States.",
    type: "Scholarship",
    deadline: "May 2024",
    location: "United States",
    featured: false,
  },
];
export default function OppurtunitiesFeatured() {
  return (
    <section className="py-24 bg-ourLightBlue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-ourDarkBlue/10 text-ourDarkBlue px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-ourDarkBlue/20">
            <Star className="w-4 h-4" />
            Hand-picked for You
          </div>
          <SubHeading text="Featured Opportunities" />
          <p className="text-xl text-ourGray max-w-3xl mx-auto leading-relaxed">
            Discover exceptional scholarships, internships, and fellowships
            currently accepting applications from Pakistani students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {opportunities.map((opportunity) => (
            <Card
              key={opportunity.id}
              className={`group overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl border-1 border-ourDarkBlue transition duration-300 
                
              `}
            >
              {opportunity.featured && (
                <div className="bg-ourDarkBlue text-white text-center py-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 transform -skew-y-1"></div>
                  <span className="relative text-sm font-bold tracking-wide flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    FEATURED OPPORTUNITY
                  </span>
                </div>
              )}

              <CardContent className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-ourBlue ring-2 ring-ourDarkBlue/20">
                      <Image
                        width={100}
                        height={100}
                        src={opportunity.logo}
                        alt={opportunity.organization}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-ourBlack text-lg leading-tight mb-1">
                        {opportunity.title}
                      </h3>
                      <p className="text-sm text-ourGray font-medium">
                        {opportunity.organization}
                      </p>
                    </div>
                  </div>

                  <Badge
                    className={`bg-ourOrange text-white border-ourOrange font-semibold text-xs px-3 py-1 border shrink-0`}
                  >
                    {opportunity.type}
                  </Badge>
                </div>

                <p className="text-ourGray leading-relaxed text-sm">
                  {opportunity.description}
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-ourGray">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ourBlue">
                      <Calendar className="w-4 h-4 text-ourDarkBlue" />
                    </div>
                    <span className="font-medium">
                      Deadline:{" "}
                      <span className="text-ourBlack">
                        {opportunity.deadline}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-ourGray">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ourBlue">
                      <Globe className="w-4 h-4 text-ourDarkBlue" />
                    </div>
                    <span className="font-medium">
                      Location:{" "}
                      <span className="text-ourBlack">
                        {opportunity.location}
                      </span>
                    </span>
                  </div>
                </div>

                <Button className="w-48 rounded-full transition-all duration-300 bg-ourSkyBlue hover:bg-ourDarkBlue text-white absolute bottom-5 left-1/2 -translate-x-1/2 ">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-ourDarkBlue hover:bg-ourDarkBlue hover:shadow-lg text-white px-10 py-4 rounded-full font-bold transition-all duration-300"
          >
            <Award className="w-5 h-5 mr-2" />
            View All 500+ Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
