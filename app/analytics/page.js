"use client"
import { useEffect, useState } from "react";

const Analytics = () => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        fetch("/api/get-analytics")
            .then(res => res.json())
            .then(data => setUrls(data));
    }, []);

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-lg my-8">
            <h2 className="text-2xl font-bold mb-4">Your Shortened URLs</h2>
            {urls.map((url, index) => (
                <div key={index} className="p-2 border-b flex justify-between">
                    <a href={`/${url.shorturl}`} target="_blank" className="text-blue-600">
                        {url.shorturl}
                    </a>
                    <span className="text-gray-600">Clicks: {url.clicks}</span>
                </div>
            ))}
        </div>
    );
};

export default Analytics;
