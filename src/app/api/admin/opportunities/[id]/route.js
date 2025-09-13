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

// GET /api/admin/opportunities/:id
export async function GET(_req, { params }) {
  try {
    await dbConnect();
    const doc = await Opportunities.findById(params.id).lean();
    if (!doc) return new Response(JSON.stringify({ message: "Not found" }), { status: 404 });
    return new Response(JSON.stringify(doc), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}

// PATCH /api/admin/opportunities/:id
export async function PATCH(req, { params }) {
  try {
    if (!isAdmin(req)) return unauthorized();
    await dbConnect();

    const data = await req.json();
    const updated = await Opportunities.findByIdAndUpdate(params.id, data, {
      new: true, runValidators: true,
    }).lean();

    if (!updated) return new Response(JSON.stringify({ message: "Not found" }), { status: 404 });
    return new Response(JSON.stringify(updated), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}

// DELETE /api/admin/opportunities/:id
export async function DELETE(req, { params }) {
  try {
    if (!isAdmin(req)) return unauthorized();
    await dbConnect();

    const deleted = await Opportunities.findByIdAndDelete(params.id);
    if (!deleted) return new Response(JSON.stringify({ message: "Not found" }), { status: 404 });

    return new Response(JSON.stringify({ ok: true }), { status: 204 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
