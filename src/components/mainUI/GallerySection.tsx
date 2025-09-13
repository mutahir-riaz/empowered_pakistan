"use client";

import Image from "next/image";
import SubHeading from "../ui/SubHeading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import galleryData from "@/data/gallery";

export default function GallerySection() {
  return (
    <section className="py-20 w-full bg-ourLightBlue">
      <div className="container mx-auto px-6">
        <SubHeading text="Gallery" className="mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map(
            (item, index) =>
              index <= 2 && (
                <Card
                  key={item.id}
                  className="group hover:shadow-lg transition-shadow duration-300 relative !pt-0"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-semibold mb-2 text-balance">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-ourGray text-pretty">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      asChild
                      className="w-[80%] absolute bottom-10 left-1/2 -translate-x-1/2 bg-ourDarkBlue hover:bg-ourDarkestBlue"
                    >
                      <Link href="/gallery">View Collection</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
          )}
        </div>
        <Button
          size="lg"
          className="w-fit mx-auto bg-ourDarkBlue hover:bg-ourDarkBlue/90 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2 cursor-pointer  mt-10"
        >
          <Link href="/gallery">Visit Gallery</Link>
        </Button>
      </div>
    </section>
  );
}
