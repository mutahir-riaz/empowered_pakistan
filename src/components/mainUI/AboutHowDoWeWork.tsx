import Image from "next/image";
import SubHeading from "../ui/SubHeading";

export default function AboutHowDoWeWork() {
  return (
    <section className="py-20 bg-ourBlue">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <Image
              src="/hero.jpg"
              alt="Students learning together"
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ourSkyBlue rounded-2xl opacity-20"></div>
          </div>

          <div className="space-y-6">
            <SubHeading text="How Do We Work" className="text-left !p-0" />
            <div className="space-y-4">
              <p className="text-lg text-ourGray leading-relaxed">
                EmpowerED Pakistan is run by a passionate team of volunteers and
                changemakers who bring their unique skills and ideas to the
                table. Instead of rigid departments, we operate through{" "}
                <strong>collaborative boards</strong>, each responsible for a
                specific area of our work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
