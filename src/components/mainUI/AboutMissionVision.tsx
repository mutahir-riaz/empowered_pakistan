import { Card, CardContent } from "../ui/card";
import { Target, Eye } from "lucide-react";

export function AboutMissionVision() {
  return (
    <section className="py-20 bg-ourLightBlue">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-ourDarkestBlue">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-ourDarkestBlue rounded-full">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-ourDarkestBlue">
                    Mission
                  </h3>
                </div>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  To advance equality in access to educational opportunities by
                  guiding students, connecting them with opportunities to
                  outshine academically and creating opportunities where gaps
                  exist.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-ourSkyBlue">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-ourSkyBlue rounded-full">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-ourDarkestBlue">
                    Vision
                  </h3>
                </div>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  A Pakistan where students from remote villages and crowded
                  cities alike have access to the same doors, doors that open to
                  discovery, mentorship, opportunity, and hope.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
