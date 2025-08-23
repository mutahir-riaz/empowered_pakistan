"use client";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { MapPin, Calendar, Users, DollarSign } from "lucide-react";
import SubHeading from "../ui/SubHeading";

export default function FeaturedOppurtunity() {
  const opportunities = [
    {
      title: "Youth Leadership Summit 2025",
      subjects: ["Leadership", "Communication"],
      category: "Workshop",
      location: "Karachi, Pak",
      date: "March 15-17, 2025",
      cost: "Free",
      participants: "50 spots",
    },
    {
      title: "Peace Ambassador Training",
      subjects: ["Conflict Resolution", "Peace"],
      category: "Training",
      location: "Online",
      date: "August 20, 2025",
      cost: "25k",
      participants: "30 spots",
    },
    {
      title: "Community Outreach Program",
      subjects: ["Social Work", "Community Building"],
      category: "Volunteer",
      location: "Lahore, PAk",
      date: "Ongoing",
      cost: "Free",
      participants: "100+ volunteers",
    },
    {
      title: "Global Youth Conference",
      subjects: ["International Relations", "Community"],
      category: "Conference",
      location: "Washington, DC",
      date: "April 10-12, 2025",
      cost: "75k",
      participants: "200 spots",
    },
  ];

  const filters = [
    { label: "All Subjects", value: "all" },
    { label: "Leadership", value: "leadership" },
    { label: "Peace Building", value: "peace" },
    { label: "Community", value: "community" },
  ];

  const filterOpportunities = (filter: string) => {
    if (filter === "all") return opportunities;
    if (filter === "leadership")
      return opportunities.filter((o) => o.subjects.includes("Leadership"));
    if (filter === "peace")
      return opportunities.filter((o) => o.subjects.includes("Peace"));
    if (filter === "community")
      return opportunities.filter((o) => o.subjects.includes("Community"));
    return [];
  };

  return (
    <section className="py-20 bg-ourLightBlue w-full">
      <div className="container mx-auto px-6">
        <SubHeading text="Featured Oppurtunities" className="mb-5"/>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center bg-ourLightBlue mx-auto gap-3 mb-12">
            {filters.map((filter) => (
              <TabsTrigger
                key={filter.value}
                value={filter.value}
                className="rounded-full px-6 data-[state=active]:bg-ourSkyBlue data-[state=active]:text-white border border-ourSkyBlue text-ourSkyBlue hover:bg-ourSkyBlue hover:text-white"
              >
                {filter.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {filters.map((filter: { label: string; value: string }) => (
            <TabsContent key={filter.value} value={filter.value}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filterOpportunities(filter.value).length > 0 ? (
                  filterOpportunities(filter.value).map(
                    (opportunity, index) => (
                      <Card
                        key={index}
                        className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                      >
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <Badge className="bg-ourOrange text-white mb-2">
                              {opportunity.category}
                            </Badge>
                            <h3 className="text-xl mb-2 text-[#0a192f]">
                              {opportunity.title}
                            </h3>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex flex-wrap gap-1">
                              {opportunity.subjects.map((subject, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="text-xs border-ourSkyBlue text-ourSkyBlue"
                                >
                                  {subject}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="w-4 h-4 mr-1" />
                              {opportunity.location}
                            </div>

                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="w-4 h-4 mr-1" />
                              {opportunity.date}
                            </div>

                            <div className="flex items-center text-sm text-gray-600">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {opportunity.cost}
                            </div>

                            <div className="flex items-center text-sm text-gray-600">
                              <Users className="w-4 h-4 mr-1" />
                              {opportunity.participants}
                            </div>
                          </div>

                          <Button className="w-full bg-ourSkyBlue hover:bg-[#00acc1] text-white rounded-full">
                            View Opportunity
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  )
                ) : (
                  <h3 className="text-4xl md:col-span-2 lg:col-span-4 text-center w-full p-4">
                    No Oppurtunities Found
                  </h3>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
