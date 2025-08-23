import Opportunities from "../../models/Opportunities.js";
import dbConnect from "../../lib/db.js";

export async function GET() {
    try {
        await dbConnect();
        const data = await Opportunities.find({});

        if (!data.length) {
            return new Response(JSON.stringify({
                success: false, 
                message: "No opportunities found"
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
            message: error.message
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        })
    }
}