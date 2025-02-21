import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        // Check if short URL already exists
        const doc = await collection.findOne({ shorturl: body.shorturl });
        if (doc) {
            return new Response(JSON.stringify({ success: false, message: "URL already exists!" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Insert new short URL
        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
            clicks: 0  // Track number of visits
        });

        return new Response(JSON.stringify({ success: true, message: "URL Generated Successfully" }), {
            status: 201,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Server error", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
