import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true, id: false }
);

GallerySchema.index({ title: 1 });
GallerySchema.index({ title: "text", description: "text" });

// Use ES6 export and ternary operator for model declaration
export default mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema, "gallery");