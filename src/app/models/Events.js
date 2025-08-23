import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
});

export default mongoose.models.Events || mongoose.model("Events", EventSchema);