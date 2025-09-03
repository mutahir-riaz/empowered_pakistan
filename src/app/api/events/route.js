// src/app/api/admin/events/route.js
import dbConnect from "../../../lib/db";
import Events    from "../../../models/Events";


// GET /api/events?tab=upcoming|past&limit=8
export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const tab   = (searchParams.get("tab") || "upcoming").toLowerCase();
    const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "8", 10) || 8);

    const now = new Date();

    // upcoming => date >= now; past => date < now
    const filter = tab === "past" ? { date: { $lt:  now } }
                                  : { date: { $gte: now } };

    const items = await Events.find(filter)
      .sort({ date: tab === "past" ? -1 : 1 })
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
