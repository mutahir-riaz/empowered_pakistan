import React from "react";
import { Card, CardContent } from "../ui/card";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 w-full bg-ourLightBlue">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="mb-6">
                <Target className="w-16 h-16 mx-auto text-[#00bcd4]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0a192f]">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To advance equality in access to educational opportunities by
                guiding students, connecting them with opportunities to outshine
                academically and creating opportunities where gaps exist.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="mb-6">
                <Eye className="w-16 h-16 mx-auto text-[#ff9800]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0a192f]">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision a Pakistan where a student's future isn't defined by
                where they were born, what school they went to, or who they know
                but by who they are, what they dream of, and what they're
                capable of. A Pakistan where students from remote villages and
                crowded cities alike have access to the same doors, doors that
                open to discovery, mentorship, opportunity, and hope.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
