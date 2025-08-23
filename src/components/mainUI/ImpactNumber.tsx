import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Users, Briefcase, Clock, Handshake } from "lucide-react";
import CountUp from "../ui/CountUp";
import SubHeading from "../ui/SubHeading";

interface ImpactStat {
  icon: typeof Users;
  number: number;
  label: string;
  color: string;
  key: string;
}

export default function ImpactNumbers() {
  const [stats, setStats] = useState<ImpactStat[]>([
    {
      icon: Users,
      number: 15,
      label: "Students Reached",
      color: "text-[#00bcd4]",
      key: "students",
    },
    {
      icon: Briefcase,
      number: 20,
      label: "Opportunities Provided",
      color: "text-[#ff9800]",
      key: "opportunities",
    },
    {
      icon: Clock,
      number: 127,
      label: "Volunteer Hours",
      color: "text-[#00bcd4]",
      key: "hours",
    },
    {
      icon: Handshake,
      number: 7,
      label: "Partnerships Formed",
      color: "text-[#ff9800]",
      key: "partnerships",
    },
  ]);

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedStats = localStorage.getItem("impactStats");
    if (savedStats) {
      const parsed = JSON.parse(savedStats);
      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          number: parsed[stat.key] || 0,
        }))
      );
    }
  }, []);

  return (
    <section className="py-20 bg-ourBlue w-full min-h-[90vh]">
      <div className="container mx-auto px-6 space-y-20">
        <SubHeading text="Our Impact" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="pt-6">
                  <IconComponent
                    className={`w-12 h-12 mx-auto mb-4 ${stat.color}`}
                  />
                  <div className={`text-4xl mb-2 ${stat.color}`}>
                    <CountUp
                      from={0}
                      to={stat.number}
                      direction="up"
                      duration={1}
                      delay={0}
                    />
                    +
                  </div>
                  <p className="text-ourGray">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
