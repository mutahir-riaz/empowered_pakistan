"use client";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Star, Globe, ExternalLink, Calendar } from "lucide-react";
import SubHeading from "../ui/SubHeading";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OpportunitiesSection() {
  interface Opportunity {
    _id: string;
    title: string;
    organization: string;
    description: string;
    type: string; // Or a more specific union type like: 'Scholarship' | 'Internship' | 'Fellowship' | 'Competition' | 'Online Course'
    deadline: string;
    location: string;
    featured: boolean;
    tags: string[]; // An array of strings
  }
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const fetchOpportunities = async () => {
    try {
      const fetchedData = await fetch("/api/opportunities");
      const fetchedOpportunites = await fetchedData.json();
      console.log("fetchedOpportunites: ", fetchedOpportunites); // Debugging line
      if (Array.isArray(fetchedOpportunites)) {
        setOpportunities(fetchedOpportunites);
      } else {
        console.error(
          "API /api/opportunities did not return an array:",
          fetchedOpportunites
        );
        setOpportunities([]);
      }
    } catch (e) {
      console.error("Failed to fetch opportunities:", e);
      setOpportunities([]);
    } finally {
    }
  };
  useEffect(() => {
    fetchOpportunities();
  }, []);
  return (
    <section
      className="py-20 bg-ourLightBlue w-full"
      id="featured-opportunities"
    >
      <div className="container mx-auto px-6">
        <SubHeading
          text="Featured Opportunities"
          className="mb-12 text-center"
        />
        <div>
          {opportunities.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {opportunities.filter((opportunity) => opportunity.featured)
                .length > 0 ? (
                opportunities
                  .filter((opportunity) => opportunity.featured)
                  .map(
                    (opportunity, index) =>
                      index <= 2 && (
                        <Card
                          key={opportunity._id}
                          className="group overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl border-1 border-ourDarkBlue transition duration-300"
                        >
                          {/* Featured Banner */}
                          <div className="bg-ourDarkBlue text-white text-center py-3 relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/10 transform -skew-y-1"></div>
                            <span className="relative text-sm font-bold tracking-wide flex items-center justify-center gap-2">
                              <Star className="w-4 h-4 fill-current" />
                              FEATURED OPPORTUNITY
                            </span>
                          </div>

                          <CardContent className="p-8 space-y-6">
                            <div className="flex items-center flex-col gap-4 sm:gap-0 sm:flex-row sm:items-start sm:justify-between">
                              <div className="flex-1 min-w-0 text-center sm:text-left">
                                <h3 className="font-bold text-ourBlack text-lg leading-tight mb-1">
                                  {opportunity.title}
                                </h3>
                                <p className="text-sm text-ourGray font-medium">
                                  {opportunity.organization}
                                </p>
                              </div>

                              <Badge className="bg-ourOrange text-white border-ourOrange font-semibold text-xs px-3 py-1 border shrink-0">
                                {opportunity.type}
                              </Badge>
                            </div>

                            <p className="text-ourGray leading-relaxed text-sm">
                              {opportunity.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {opportunity.tags.map((tag, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="text-xs border-ourSkyBlue text-ourSkyBlue"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

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
                      )
                  )
              ) : (
                <h3 className="text-xl md:col-span-2 lg:col-span-3 text-center w-full p-4">
                  No Featured Opportunities Found
                </h3>
              )}
            </div>
          ) : (
            <h3 className="text-xl md:col-span-2 lg:col-span-3 text-center w-full p-4 py-10">
              No Opportunities Found
            </h3>
          )}
        </div>

        <Button
          size="lg"
          className="w-fit mx-auto bg-ourDarkBlue hover:bg-ourDarkBlue/90 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2 cursor-pointer"
        >
          <Link href="/opportunities">View All Opportunities</Link>
        </Button>
      </div>
    </section>
  );
}
