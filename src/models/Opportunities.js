import mongoose from "mongoose";

const OpportunitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: new Date() },
  fees: { type: String, default: "Free" },
  capacity: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
});

export default mongoose.models.Opportunity ||
  mongoose.model("Opportunity", OpportunitySchema);
