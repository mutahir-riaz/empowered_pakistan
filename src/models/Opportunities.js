import mongoose from "mongoose";

/*
Matches your JSON:
id, title, organization, description, type, deadline, location, featured, tags[]
*/
const OpportunitySchema = new mongoose.Schema(
  {
    title:        { type: String, required: true },
    organization: { type: String, required: true },
    description:  { type: String, required: true },
    type:         { type: String, required: true },     // Scholarship, Internship, ...
    deadline:     { type: String, required: true },     // "Nov 2024", "Ongoing"
    location:     { type: String, required: true },
    featured:     { type: Boolean, default: false },
    tags:         [{ type: String }],
  },
  { timestamps: true, id: false }
);

OpportunitySchema.index({ featured: 1, title: 1 });
OpportunitySchema.index({
  title: "text",
  organization: "text",
  description: "text",
  type: "text",
  location: "text",
});

export default mongoose.models.Opportunities ||
  mongoose.model("Opportunities", OpportunitySchema);