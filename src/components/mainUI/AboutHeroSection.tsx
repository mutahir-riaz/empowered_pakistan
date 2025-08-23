import Image from "next/image";
import Heading from "../ui/Heading";

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-ourBlue overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Heading
            text="What Empowered Pakistan Does"
            className="text-left"
            colorLastWord={true}
          />
          <p className="text-xl lg:text-2xl text-ourGray leading-relaxed">
            We are a youth-led organization working to unlock student potential
            by bridging the divide between talent, guidance and opportunity.
          </p>
          {/* <p className="text-lg lg:text-xl text-ourGray leading-relaxed">
            Whether it’s helping a student discover the world of scientific
            research, connect with a university mentor, or enhance their
            internships and university applications with impactful
            extra-curriculars, we’re here to make them possible
          </p> */}
        </div>

        {/* image */}
        <div className="relative">
          <div className="relative z-10">
            <Image
              src="/hero.jpg"
              alt="Students at Empowered Pakistan event"
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
          {/* image background overlay */}
          <div className="absolute -top-6 -right-6 w-full h-full bg-ourOrange/20 rounded-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-ourDarkBlue/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
