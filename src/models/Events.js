import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true },
    location: { type: String, required: true },
    date:     { type: Date,   required: true }, // real Date → we can do < / >= comparisons
  },
  { timestamps: true }
);

EventSchema.index({ date: 1 });

export default mongoose.models.Events || mongoose.model("Events", EventSchema);
