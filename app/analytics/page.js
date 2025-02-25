"use client";
import { useEffect, useState } from "react";

const Analytics = () => {
    const [urls, setUrls] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/get-analytics")
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch analytics");
                return res.json();
            })
            .then(data => {
                console.log("API Response:", data);
                setUrls(data || []);
            })
            .catch(error => {
                console.error("Error fetching analytics:", error);
                setError("Failed to load analytics data.");
            });
    }, []);

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-lg my-8">
            <h2 className="text-2xl font-bold mb-4">Your Shortened URLs</h2>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : urls.length === 0 ? (
                <p className="text-gray-500">No URLs found.</p>
            ) : (
                urls.map((url, index) => (
                    <div key={index} className="p-2 border-b flex justify-between">
                        <a href={`/${url.shorturl}`} target="_blank" className="text-blue-600">
                            {url.shorturl}
                        </a>
                        <span className="text-gray-600">Clicks: {url.clicks}</span>
                    </div>
                ))
            )}
        </div>
    );
};

export default Analytics;
