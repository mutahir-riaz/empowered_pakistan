import dbConnect from "@/lib/db";
import Gallery from "@/models/Gallery";

// GET all gallery items
export async function GET() {
  await dbConnect();
  const galleries = await Gallery.find();
  return Response.json(galleries);
}

// CREATE new gallery item
export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  const newGallery = await Gallery.create(data);
  return Response.json(newGallery, { status: 201 });
}