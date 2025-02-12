import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOneAndUpdate(
        { shorturl: params.shorturl },
        { $inc: { clicks: 1 } }, // Increase clicks count
        { returnDocument: "after" }
    );

    if (doc) {
        redirect(doc.value.url);
    } else {
        redirect(process.env.NEXT_PUBLIC_HOST);
    }

    return null;
}

