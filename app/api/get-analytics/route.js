export async function GET(req) {
    console.log("Request Query:", req.nextUrl.searchParams); // Debugging
    const data = [
        { shorturl: "abc123", clicks: 5 },
        { shorturl: "xyz789", clicks: 10 },
    ];
    return Response.json(data, { status: 200 });
}

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Received URL:", body.url);
        
        if (!body.url) {
            return Response.json({ message: "URL is required" }, { status: 400 });
        }

        return Response.json({ message: "URL saved successfully" }, { status: 201 });
    } catch (error) {
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}
