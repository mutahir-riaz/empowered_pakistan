"use client";

import Image from "next/image";
import SubHeading from "../ui/SubHeading";

export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      alt: "UNESCO",
    },
    {
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=100&fit=crop",
      alt: "United Nations",
    },
    {
      src: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop",
      alt: "World Bank",
    },
    {
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=100&fit=crop",
      alt: "Red Cross",
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop",
      alt: "Oxfam",
    },
    {
      src: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=200&h=100&fit=crop",
      alt: "Save the Children",
    },
  ];

  return (
    <section className="py-20 w-full bg-ourLightBlue">
      <div className="container mx-auto px-6">
        <SubHeading text="Gallery" className="mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
