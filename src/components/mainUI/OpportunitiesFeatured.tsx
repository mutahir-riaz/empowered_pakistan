"use client";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Globe, ExternalLink, Star, Search } from "lucide-react";
import SubHeading from "../ui/SubHeading";
import opportunities from "@/data/opportunities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";

export default function OppurtunitiesFeatured() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredOpportunities, setFilteredOpportunities] =
    useState(opportunities);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = opportunities.filter((opportunity) => {
      const matchesCategory =
        selectedCategory === "all" ||
        `${opportunity.type.toLowerCase()}s`.includes(selectedCategory);

      const matchesSearch =
        opportunity.title.toLowerCase().includes(lowercasedQuery) ||
        opportunity.description.toLowerCase().includes(lowercasedQuery) ||
        opportunity.tags.some((tag) =>
          tag.toLowerCase().includes(lowercasedQuery)
        );

      return matchesCategory && matchesSearch;
    });

    setFilteredOpportunities(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <section className="py-24 bg-ourLightBlue w-full" id="all-oppurtunities">
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

        {/* Search Bar */}
        <div className="pb-10">
          <div>
            <div className="flex flex-col gap-8 sm:flex-row items-center justify-between px-3">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ourGray w-5 h-5" />
                <Input
                  placeholder="Search opportunities..."
                  className="pl-10 bg-white border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-xl focus:border-0 focus:ring-0 focus:outline-none w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Select
                onValueChange={(value) => setSelectedCategory(value)}
                defaultValue="all"
              >
                <SelectTrigger className="bg-white border-0 text-gray-900 py-6 px-5 rounded-xl">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="scholarships">Scholarships</SelectItem>
                  <SelectItem value="internships">Internships</SelectItem>
                  <SelectItem value="competitions">Competitions</SelectItem>
                  <SelectItem value="fellowships">Fellowships</SelectItem>
                  <SelectItem value="courses">Courses</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {filteredOpportunities.map((opportunity) => (
            <Card
              key={opportunity.id}
              className="group overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl border-1 border-ourDarkBlue transition duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
}
