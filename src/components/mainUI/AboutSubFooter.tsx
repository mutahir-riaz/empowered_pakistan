import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import SubHeading from "../ui/SubHeading";

export default function AboutSubFooter() {
  return (
    <section className="py-20 bg-gradient-to-r from-ourSkyBlue to-ourDarkBlue text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <SubHeading
            text="Join us in shaping a future where every mind has a chance"
            className="!text-4xl lg:!text-5xl !font-bold !text-white !leading-tight"
          />

          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Be part of a movement that's breaking down barriers and creating
            pathways to success for students across Pakistan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-ourOrange text-white hover:bg-ourDarkOrange px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
