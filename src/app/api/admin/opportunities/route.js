import dbConnect from "@/lib/db";
import Opportunities from "@/models/Opportunities";

function unauthorized() {
  return new Response(JSON.stringify({ message: "Unauthorized" }), {
    status: 401, headers: { "Content-Type": "application/json" },
  });
}
function isAdmin(req) {
  const token = req.headers.get("x-admin-token");
  return token && token === process.env.ADMIN_TOKEN;
}

// GET /api/admin/opportunities?search=&page=1&limit=10&sort=createdAt&dir=desc&featured=true|false
export async function GET(req) {
  try {
    if (!isAdmin(req)) return unauthorized();
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const q     = (searchParams.get("search") || "").trim();
    const page  = Math.max(1, parseInt(searchParams.get("page")  ?? "1",  10) || 1);
    const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "10", 10) || 10);
    const sortField = (searchParams.get("sort") || "createdAt");
    const dir   = (searchParams.get("dir") || "desc").toLowerCase() === "asc" ? 1 : -1;
    const featuredParam = (searchParams.get("featured") || "").toLowerCase();

    const filter = {};
    if (q) {
      filter.$or = [
        { title:        { $regex: q, $options: "i" } },
        { organization: { $regex: q, $options: "i" } },
        { type:         { $regex: q, $options: "i" } },
        { location:     { $regex: q, $options: "i" } },
        { tags:         { $regex: q, $options: "i" } },
      ];
    }
    if (featuredParam === "true" || featuredParam === "1")  filter.featured = true;
    if (featuredParam === "false" || featuredParam === "0") filter.featured = false;

    const [items, total] = await Promise.all([
      Opportunities.find(filter).sort({ [sortField]: dir }).skip((page - 1) * limit).limit(limit).lean(),
      Opportunities.countDocuments(filter),
    ]);

    return new Response(JSON.stringify({ page, limit, total, items }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}

// POST /api/admin/opportunities
export async function POST(req) {
  try {
    if (!isAdmin(req)) return unauthorized();
    await dbConnect();

    const body = await req.json();
    const { id, title, organization, description, type, deadline, location, featured, tags } = body;

    if (!title || !organization || !description || !type || !deadline || !location) {
      return new Response(JSON.stringify({ message: "title, organization, description, type, deadline, location are required" }), {
        status: 400, headers: { "Content-Type": "application/json" },
      });
    }

    const created = await Opportunities.create({
      id, title, organization, description, type, deadline, location,
      featured: !!featured,
      tags: Array.isArray(tags) ? tags : [],
    });

    return new Response(JSON.stringify(created), {
      status: 201, headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
