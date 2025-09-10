import PageHeader from "@/components/mainUI/PageHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Scholarship Programs",
      description:
        "Providing financial assistance to talented students across Pakistan to help them achieve their academic goals.",
      image: "/gallery1.jpg",
      link: "/gallery/scholarships",
    },
    {
      id: 2,
      title: "Career Guidance",
      description:
        "Workshops and mentorship sessions that help students explore career paths and make informed decisions.",
      image: "/gallery2.jpg",
      link: "/gallery/career-guidance",
    },
    {
      id: 3,
      title: "Skill Development",
      description:
        "Training programs in technology, communication, and leadership to prepare youth for the future workforce.",
      image: "/gallery3.jpg",
      link: "/gallery/skills",
    },
    {
      id: 4,
      title: "International Opportunities",
      description:
        "Connecting students with exchange programs, internships, and study-abroad opportunities.",
      image: "/gallery4.jpg",
      link: "/gallery/international",
    },
    {
      id: 5,
      title: "Community Projects",
      description:
        "Encouraging youth to take part in projects that uplift local communities and promote social responsibility.",
      image: "/gallery5.jpg",
      link: "/gallery/community",
    },
    {
      id: 6,
      title: "Innovation & Research",
      description:
        "Supporting students in research initiatives and innovative ideas that can contribute to Pakistan's progress.",
      image: "/gallery6.jpg",
      link: "/gallery/research",
    },
  ];

  return (
    <main className="min-h-screen">
      <PageHeader heading="Gallery" title="Gallery" />

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
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
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
