import { Button } from "../ui/button";

export default function HomeSubFooter() {
  return (
    <section className="py-20 w-full bg-gradient-to-r from-ourSkyBlue to-ourDarkBlue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          Ready to Be a Changemaker?
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90">
          Join thousands of young leaders making a difference in their
          communities. Your journey starts here.
        </p>
        <Button
          size="lg"
          className="bg-ourOrange text-white hover:bg-ourDarkOrange px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
}
