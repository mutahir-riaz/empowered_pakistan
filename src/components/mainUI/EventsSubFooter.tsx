import { Button } from "../ui/button";
import { Plus, Users, Lightbulb } from "lucide-react";
import SubHeading from "../ui/SubHeading";

export default function EventsSubFooter() {
  return (
    <section className="py-20 bg-gradient-to-r from-ourSkyBlue to-ourDarkBlue">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Lightbulb className="w-12 h-12 text-white" />
              </div>
            </div>

            <SubHeading
              text="Want to host or attend an event?"
              className="!text-white !font-bold"
            />
            <p className="text-xl text-ourBlue leading-relaxed max-w-2xl mx-auto">
              Join our community of changemakers. Whether you have an idea for
              an event or want to support our mission, we'd love to hear from
              you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-ourOrange hover:bg-ourDarkOrange text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Suggest an Event
            </Button>

            <Button
              size="lg"
              className="bg-white hover:bg-ourOrange text-ourOrange hover:text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold"
            >
              <Users className="w-5 h-5" />
              Join as Volunteer
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 mt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">
                Easy Process
              </div>
              <div className="text-ourBlue text-sm">
                Simple application and quick response
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">
                Full Support
              </div>
              <div className="text-ourBlue text-sm">
                We provide resources and guidance
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">
                Real Impact
              </div>
              <div className="text-ourBlue text-sm">
                Make a difference in students' lives
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
