
const eventsData = {
  upcoming: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
  ],

  past: [
    {
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
  ],
};

export default eventsData;