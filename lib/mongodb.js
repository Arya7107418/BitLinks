import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI;
const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local');
}

try {
    if (process.env.NODE_ENV === 'development') {
        if (!global._mongoClientPromise) {
            console.log("🔄 Connecting to MongoDB in development mode...");
            client = new MongoClient(uri, options);
            global._mongoClientPromise = client.connect();
        }
        clientPromise = global._mongoClientPromise;
    } else {
        console.log("🔄 Connecting to MongoDB in production mode...");
        client = new MongoClient(uri, options);
        clientPromise = client.connect();
    }

    console.log("✅ MongoDB Connected Successfully");
} catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
    throw err;
}

export default clientPromise;

