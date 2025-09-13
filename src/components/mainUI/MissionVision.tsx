"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import SubHeading from "../ui/SubHeading";
import Link from "next/link";

export default function MissionVission() {
  return (
    <section className="min-h-screen px-6 py-20 w-full bg-ourLightBlue">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/gallery1.jpg"
              alt="Young leaders collaborating on community projects"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-8">
          <SubHeading text="Mission & Vision" className="lg:!text-left !p-0" />
          <div className="space-y-6">
            <div>
              <p className="text-center lg:!text-left text-ourGray leading-relaxed">
                ~ Our mission is to advance equality in access to educational
                opportunities by guiding students, connecting them with
                opportunities to outshine academically and creating
                opportunities where gaps exist.
              </p>
            </div>

            <div>
              <p className="text-center lg:!text-left text-ourGray leading-relaxed">
                ~ Our Vision is a Pakistan where a student's future isn't
                defined by where they were born, what school they went to, or
                who they know but by who they are, what they dream of, and what
                they're capable of. A Pakistan where students from remote
                villages and crowded cities alike have access to the same doors,
                doors that open to discovery, mentorship, opportunity, and hope.
              </p>
            </div>
          </div>
          <Button
            size="lg"
            className="w-fit mx-auto bg-ourDarkBlue hover:bg-ourDarkBlue/90 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex items-center lg:inline-flex cursor-pointer"
          >
            <Link href="/">Become Volunteer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
