const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    id: { type: Number, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true, id: false }
);

GallerySchema.index({ title: 1 });
GallerySchema.index({ title: "text", description: "text" });

// 👇 force the collection name to "gallery"
module.exports = mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema, "gallery");
