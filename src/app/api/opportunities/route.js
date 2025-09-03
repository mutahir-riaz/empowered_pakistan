import dbConnect from "@/lib/db";
import Opportunities from "@/models/Opportunities";

// GET all opportunities
export async function GET() {
  await dbConnect();
  const opportunities = await Opportunities.find();
  return Response.json(opportunities);
}

// POST new opportunity
export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  const opportunity = await Opportunities.create(data);
  return Response.json(opportunity, { status: 201 });
}
