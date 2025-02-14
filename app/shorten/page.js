"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!url) {
      setError("Please enter a URL");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: url,
          shorturl: shortUrl
        })
      });

      const data = await response.json();

      if (data.success) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Something went wrong! Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      alert("Link copied to clipboard!");
    } catch (err) {
      alert("Failed to copy link");
    }
  };

  return (
    <div className="container mx-auto max-w-2xl px-4">
      <div className="bg-white my-16 p-8 rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl text-purple-900 mb-6">
          Generate your short URLs
        </h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter your URL
            </label>
            <input
              type="url"
              value={url}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="https://example.com"
              onChange={e => setUrl(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Custom short URL (optional)
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 py-2 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                {process.env.NEXT_PUBLIC_HOST}/
              </span>
              <input
                type="text"
                value={shortUrl}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="custom-url"
                onChange={e => setShortUrl(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-100 text-red-700">
              {error}
            </div>
          )}

          <button
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-400"
            onClick={generate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Short URL"}
          </button>
        </div>

        {generated && (
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your shortened URL
            </label>
            <div className="flex items-center gap-2">
              <Link 
                href={generated}
                target="_blank"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                {generated}
              </Link>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;