import { faker } from '@faker-js/faker';
import Events from "../models/Events.js";
import Opportunities from "../models/Opportunities.js";
import pkg from "@next/env";
import mongoose from 'mongoose';

function generateFakeOpportunity() {
    return {
        name: faker.company.catchPhrase(),
        location: faker.location.city(),
        date: faker.date.future(),
        fees: faker.helpers.arrayElement(["Free", "$10", "$20", "$50", "Donation"]),
        capacity: faker.number.int({ min: 10, max: 500 }),
        category: faker.helpers.arrayElement([
            "Music",
            "Technology",
            "Sports",
            "Education",
            "Networking",
            "Art",
            "Business"
        ]),
        tags: faker.helpers.arrayElements(
            ["online", "indoor", "outdoor", "beginner", "advanced", "professional", "casual", "food", "family-friendly"],
            { min: 2, max: 5 }
        )
    };
}

function generateFakeOpportunities(count = 10) {
    return Array.from({ length: count }, () => generateFakeOpportunity());
}

function generateFakeEvent() {
    return {
        name: faker.company.catchPhrase(),
        location: faker.location.city(),
        date: faker.date.future(),
    };
}

function generateFakeEvents(count = 10) {
    return Array.from({ length: count }, () => generateFakeEvent());
}

const { loadEnvConfig } = pkg;
loadEnvConfig(process.cwd());

async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
    const oppResult = await Opportunities.insertMany(generateFakeOpportunities(5));
    console.log(oppResult);
    const eventResult = await Events.insertMany(generateFakeEvents(5));
    console.log(eventResult);
    await mongoose.disconnect();
}

await main();