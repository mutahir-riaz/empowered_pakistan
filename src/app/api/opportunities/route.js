import dbConnect from "@/lib/db";
import Opportunities from "@/models/Opportunities";

// GET /api/opportunities?featured=true|false&search=...&limit=12
export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const featuredParam = (searchParams.get("featured") || "").toLowerCase();
    const search = (searchParams.get("search") || "").trim();
    const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "12", 10) || 12);

    const filter = {};
    if (featuredParam === "true" || featuredParam === "1") filter.featured = true;
    if (featuredParam === "false" || featuredParam === "0") filter.featured = false;

    if (search) {
      filter.$or = [
        { title:        { $regex: search, $options: "i" } },
        { organization: { $regex: search, $options: "i" } },
        { type:         { $regex: search, $options: "i" } },
        { location:     { $regex: search, $options: "i" } },
        { tags:         { $regex: search, $options: "i" } },
      ];
    }

    const items = await Opportunities.find(filter)
      .sort({ featured: -1, title: 1 })
      .limit(limit)
      .lean();

    return new Response(JSON.stringify(items), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
