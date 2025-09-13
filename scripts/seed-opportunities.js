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
const { default: Opportunities } = await import("../src/models/Opportunities.js");

const opportunities = [
  { id: 1, title: "Chevening Scholarships 2024", organization: "UK Government",
    description: "Fully funded master's degree scholarships for future leaders to study in the UK.",
    type: "Scholarship", deadline: "Nov 2024", location: "United Kingdom",
    featured: true, tags: ["Leadership", "Communication"] },
  { id: 2, title: "Google Summer of Code", organization: "Google",
    description: "Paid internship program for university students to contribute to open source projects.",
    type: "Internship", deadline: "Apr 2024", location: "Remote",
    featured: true, tags: ["Tech", "Open Source", "Community"] },
  { id: 3, title: "USAID Youth Excellence Fund", organization: "USAID",
    description: "Grants for innovative youth-led projects addressing development challenges.",
    type: "Fellowship", deadline: "Dec 2024", location: "Pakistan",
    featured: true, tags: ["Social Work", "Community Building"] },
  { id: 4, title: "Microsoft Imagine Cup", organization: "Microsoft",
    description: "Global technology competition for student developers and entrepreneurs.",
    type: "Competition", deadline: "Mar 2024", location: "Global",
    featured: true, tags: ["Innovation", "Technology", "Entrepreneurship"] },
  { id: 5, title: "Coursera Plus Scholarships", organization: "Coursera",
    description: "Free access to professional certificates and university courses for underserved students.",
    type: "Online Course", deadline: "Ongoing", location: "Online",
    featured: false, tags: ["Online Learning", "Career Growth"] },
  { id: 6, title: "Fulbright Scholarship Program", organization: "US Department of State",
    description: "Educational exchange program offering grants for graduate study in the United States.",
    type: "Scholarship", deadline: "May 2024", location: "United States",
    featured: false, tags: ["Leadership", "Global", "Research"] },
];

async function run() {
  try {
    await dbConnect();
    await Opportunities.deleteMany({});
    const result = await Opportunities.insertMany(opportunities, { ordered: false });
    console.log(`Inserted ${result.length} opportunities.`);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
