import dbConnect from "@/lib/db";
import Opportunities from "@/models/Opportunities";

// GET one by ID
export async function GET(req, context) {
  const { params } = await context; // 👈 await context
  await dbConnect();
  const opportunity = await Opportunities.findById(params.id);
  if (!opportunity) return new Response("Not Found", { status: 404 });
  return Response.json(opportunity);
}

// UPDATE
export async function PUT(req, context) {
  const { params } = await context;
  await dbConnect();
  const body = await req.json();
  const updated = await Opportunities.findByIdAndUpdate(params.id, body, { new: true });
  if (!updated) return new Response("Not Found", { status: 404 });
  return Response.json(updated);
}

// DELETE
export async function DELETE(req, context) {
  const { params } = await context;
  await dbConnect();
  await Opportunities.findByIdAndDelete(params.id);
  return new Response("Deleted Successfully", { status: 200 });
}
