import dbConnect from "../../../../lib/db";
import Events from "../../../../models/Events";

function unauthorized() {
  return new Response(JSON.stringify({ message: "Unauthorized" }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}

function isAdmin(req) {
  const token = req.headers.get("x-admin-token");
  return token && token === process.env.ADMIN_TOKEN;
}

// GET /api/admin/events?search=&page=1&limit=10&sort=date&dir=desc
export async function GET(req) {
  try {
    if (!isAdmin(req)) return unauthorized();
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const q     = (searchParams.get("search") || "").trim();   // optional search by name/location
    const page  = Math.max(1, parseInt(searchParams.get("page")  ?? "1",  10) || 1);
    const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "10", 10) || 10);
    const sort  = (searchParams.get("sort") || "date");        // "date" | "name" | "location"
    const dir   = (searchParams.get("dir")  || "desc").toLowerCase() === "asc" ? 1 : -1;

    const filter = q
      ? { $or: [
          { name:     { $regex: q, $options: "i" } },
          { location: { $regex: q, $options: "i" } },
        ] }
      : {};

    const [items, total] = await Promise.all([
      Events.find(filter)
        .sort({ [sort]: dir })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Events.countDocuments(filter),
    ]);

    return new Response(JSON.stringify({
      page, limit, total, items
    }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}


export async function POST(req) {
  try {
    if (!isAdmin(req)) return unauthorized();
    await dbConnect();

    const body = await req.json();
    const {
      title,
      date,
      time,
      location,
      type,
      description,
      image,
      tags,
      registrationOpen,
      outcome,
      participants,
    } = body;

    if (!title || !date || !time || !location || !type || !description || !image) {
      return new Response(
        JSON.stringify({
          message: "title, date, time, location, type, description, image are required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const created = await Events.create({
      title,
      date,
      time,
      location,
      type,
      description,
      image,
      tags: Array.isArray(tags) ? tags : [],
      registrationOpen: typeof registrationOpen === "boolean" ? registrationOpen : true,
      outcome: outcome || "",
      participants: typeof participants === "number" ? participants : 0,
    });

    return new Response(JSON.stringify(created), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Event POST error:", err); // ✅ log error for debugging
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
