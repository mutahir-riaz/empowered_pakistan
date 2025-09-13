// scripts/seedGallery.js (CommonJS)
require('dotenv').config();
const mongoose = require('mongoose');

// If your model file is CommonJS (module.exports = ...), require it:
const Gallery = require('../src/models/Gallery');

// If your model is still ESM, use inline schema instead
// const Gallery = require('../src/models/Gallery');

const galleryData = [
  { id: 1, title: "Scholarship Programs", description: "Providing financial assistance to talented students across Pakistan to help them achieve their academic goals.", image: "/gallery1.jpg", link: "/gallery/scholarships" },
  { id: 2, title: "Career Guidance", description: "Workshops and mentorship sessions that help students explore career paths and make informed decisions.", image: "/gallery2.jpg", link: "/gallery/career-guidance" },
  { id: 3, title: "Skill Development", description: "Training programs in technology, communication, and leadership to prepare youth for the future workforce.", image: "/gallery3.jpg", link: "/gallery/skills" },
  { id: 4, title: "International Opportunities", description: "Connecting students with exchange programs, internships, and study-abroad opportunities.", image: "/gallery4.jpg", link: "/gallery/international" },
  { id: 5, title: "Community Projects", description: "Encouraging youth to take part in projects that uplift local communities and promote social responsibility.", image: "/gallery5.jpg", link: "/gallery/community" },
  { id: 6, title: "Innovation & Research", description: "Supporting students in research initiatives and innovative ideas that can contribute to Pakistan's progress.", image: "/gallery6.jpg", link: "/gallery/research" }
];

async function seed() {
  try {
    const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
    if (!uri) {
      console.error("❌ MONGODB_URI is not set. Create a .env file with MONGODB_URI=your_uri (see repo root).");
      process.exit(1);
    }

    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(uri, { /* Mongoose v7+ uses defaults, options can be included if you want */ });
    console.log("✅ Connected to MongoDB");

    // Optional: clear existing docs
    await Gallery.deleteMany({});
    console.log("🗑 Cleared existing gallery items");

    // Insert all at once
    await Gallery.insertMany(galleryData);
    console.log("🎉 Gallery data seeded successfully!");

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding gallery:", err);
    try { await mongoose.disconnect(); } catch(_) {}
    process.exit(1);
  }
}

seed();
