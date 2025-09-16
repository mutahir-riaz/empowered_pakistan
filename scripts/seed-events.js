// scripts/seed-opportunities.js
import { config } from "dotenv";
import fs from "node:fs";

// load env FIRST, using a simple relative path
console.log("cwd:", process.cwd(), "env exists?", fs.existsSync(".env.local"));
config({ path: ".env.local" });

if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI not loaded from .env.local");
  process.exit(1);
}


// Import modules AFTER env is loaded
const { default: dbConnect } = await import("../src/lib/db.js");
const { default: Events } = await import("../src/models/Events.js");

const events = [
    {
      title: "Leadership Skills Webinar",
      date: "2025-01-25",
      time: "2:00 PM EST",
      location: "Online",
      type: "webinar",
      description: "A live webinar on developing essential leadership skills.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
      tags: ["Virtual", "Leadership"],
      registrationOpen: true,
    },
    {
      title: "Community Cleanup Day",
      date: "2025-02-08",
      time: "9:00 AM EST",
      location: "Central Park, NYC",
      type: "volunteer",
      description: "Join us in making our community cleaner and greener.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
      tags: ["Volunteer", "Community"],
      registrationOpen: true,
    },
    {
      title: "Peace Building Workshop",
      date: "2025-02-15",
      time: "10:00 AM EST",
      location: "Online",
      type: "webinar",
      description: "An interactive workshop on fostering peace and dialogue.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
      tags: ["Virtual", "Peace"],
      registrationOpen: true,
    },
    {
      title: "Youth Mentorship Program",
      date: "2025-03-01",
      time: "Ongoing",
      location: "Various Locations",
      type: "volunteer",
      description: "Mentorship opportunities for youth across multiple cities.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
      tags: ["Mentorship", "Volunteer"],
      registrationOpen: true,
    },
    {
      title: "Career Guidance Workshop",
      date: "2024-02-15",
      time: "2:00 PM - 5:00 PM",
      location: "Karachi University",
      type: "workshop",
      description:
        "Interactive session with industry professionals to guide students in career planning and skill development.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      tags: ["In-Person", "Free", "Career"],
      registrationOpen: false,
    },
    {
      title: "Virtual Mentorship Program",
      date: "2024-02-20",
      time: "7:00 PM - 8:30 PM",
      location: "Online (Zoom)",
      type: "mentorship",
      description:
        "Launch event for our new virtual mentorship program connecting students with experienced professionals.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      tags: ["Virtual", "Free", "Mentorship"],
      registrationOpen: true,
    },
    {
      title: "Scholarship Application Workshop",
      date: "2024-02-25",
      time: "10:00 AM - 3:00 PM",
      location: "Lahore Community Center",
      type: "workshop",
      description:
        "Comprehensive workshop on finding and applying for scholarships, including essay writing tips and interview preparation.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      tags: ["In-Person", "Free", "Scholarship"],
      registrationOpen: true,
    },
    {
      title: "Tech Skills Bootcamp",
      date: "2024-03-01",
      time: "9:00 AM - 6:00 PM",
      location: "Islamabad Tech Hub",
      type: "bootcamp",
      description:
        "Intensive one-day bootcamp covering essential tech skills including coding basics, digital literacy, and online tools.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
      tags: ["In-Person", "Tech", "Skills"],
      registrationOpen: true,
    },
    {
      title: "Annual Youth Summit 2024",
      date: "2024-12-10",
      time: "Full Day",
      location: "Boston, MA",
      type: "conference",
      description: "A yearly summit bringing together youth leaders worldwide.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
      outcome: "Empowered youth collaboration with opportunities.",
      participants: 500,
    },
    {
      title: "Conflict Resolution Training",
      date: "2024-11-20",
      time: "3:00 PM EST",
      location: "Online",
      type: "webinar",
      description:
        "Training session on resolving conflicts through communication.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
      outcome: "Improved conflict resolution skills.",
      participants: 200,
    },
    {
      title: "Food Drive Initiative",
      date: "2024-11-15",
      time: "8:00 AM EST",
      location: "Multiple Cities",
      type: "volunteer",
      description: "Nationwide food drive initiative.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
      outcome: "Thousands of meals donated.",
      participants: 1000,
    },
    {
      title: "Leadership Summit 2023",
      date: "2023-12-01",
      location: "Karachi",
      type: "conference",
      description: "Summit to empower youth with leadership skills.",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
      outcome: "250+ students empowered with leadership skills",
      participants: 250,
    },
    {
      title: "Digital Skills Workshop",
      date: "2023-11-01",
      location: "Lahore",
      type: "workshop",
      description: "Hands-on training on digital skills for students.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      outcome: "180 students learned essential digital skills",
      participants: 180,
    },
    {
      title: "Scholarship Fair",
      date: "2023-10-01",
      location: "Islamabad",
      type: "fair",
      description:
        "Fair showcasing multiple scholarships and opportunities for students.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      outcome: "90% participants found suitable scholarships",
      participants: 300,
    },
    {
      title: "Career Mentorship Day",
      date: "2023-09-01",
      location: "Online",
      type: "mentorship",
      description: "Connecting students with mentors from various industries.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      outcome: "150+ mentorship connections formed",
      participants: 200,
    },
    {
      title: "Youth Innovation Challenge",
      date: "2023-08-01",
      location: "Karachi",
      type: "competition",
      description:
        "Challenge for youth to present innovative solutions and projects.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
      outcome: "50 innovative project ideas presented",
      participants: 120,
    },
];

async function run() {
  try {
    await dbConnect();
    await Events.deleteMany({});
    const result = await Events.insertMany(events, { ordered: false });
    console.log(`Inserted ${result.length} events.`);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();