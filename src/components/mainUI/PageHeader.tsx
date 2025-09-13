import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const PageHeader = (props: { heading: string; title: string }) => {
  return (
    <div>
      {/* div with background Image */}
      <div className="bg-[url('/hero.jpg')] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] bg-cover bg-center w-full text-white flex items-center justify-center">
        {/* text on the image */}
        <div className="flex flex-col items-center gap-3 px-4 md:gap-4">
          {/* Heading */}
          <h1 className="font-sans text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-center">
            {props.heading}
          </h1>
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-1 md:gap-2 text-sm sm:text-base md:text-lg">
            <Link href="/" className="underline underline-offset-2">Home</Link>
            <ChevronRight />
            <span className="text-orangeLike">{props.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
