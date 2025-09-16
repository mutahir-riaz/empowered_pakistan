import dbConnect from "@/lib/db";
import Gallery from "@/models/Gallery";

// GET single gallery item
export async function GET(req, context) {
  const { params } = await context;
  await dbConnect();
  const gallery = await Gallery.findById(params.id);
  if (!gallery) return new Response("Not Found", { status: 404 });
  return Response.json(gallery);
}

// UPDATE gallery item
export async function PATCH(req, context) {
  const { params } = await context;
  await dbConnect();
  const body = await req.json();
  const updated = await Gallery.findByIdAndUpdate(params.id, body, { new: true });
  if (!updated) return new Response("Not Found", { status: 404 });
  return Response.json(updated);
}

// DELETE gallery item
export async function DELETE(req, context) {
  const { params } = await context;
  await dbConnect();
  await Gallery.findByIdAndDelete(params.id);
  return new Response("Deleted Successfully", { status: 200 });
}