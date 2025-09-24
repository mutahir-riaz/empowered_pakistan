import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(  {
    title:        { type: String, required: true },
    date:        { type: String, required: true },
    time:        { type: String},
    location: { type: String, required: true },
    type:         { type: String, required: true },     // Scholarship, Internship, ...
    description:  { type: String, required: true },
    image:     { type: String, required: true },     // "Nov 2024", "Ongoing"
    registrationOpen:     { type: Boolean, default: true },
    isPast:     { type: Boolean,required: true },
    tags:         [{ type: String }],
    outcome:     { type: String },
    participants:     { type: Number },
  },
  { timestamps: true, id: false }
);

export default mongoose.models.Events || mongoose.model("Events", EventSchema);