import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Generate short URLs instantly with our optimized infrastructure",
      icon: "⚡"
    },
    {
      title: "Privacy Focused",
      description: "No tracking, no personal data collection - just pure URL shortening",
      icon: "🔒"
    },
    {
      title: "Free Forever",
      description: "All features are completely free with no hidden costs",
      icon: "💎"
    },
    {
      title: "Open Source",
      description: "Transparent codebase available on GitHub for everyone",
      icon: "📖"
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-purple-100">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-900 mb-6">
            About BitLinks
          </h1>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            BitLinks is a modern, privacy-focused URL shortening service built for 
            developers and everyday users alike. Our mission is to make link sharing 
            simple and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-purple-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-purple-700 mb-4">
            BitLinks was born from a simple idea: URL shortening shouldn't come with 
            privacy compromises. While other services track users and collect data, 
            we chose a different path.
          </p>
          <p className="text-lg text-purple-700">
            Built with modern technologies like Next.js and MongoDB, BitLinks 
            provides a fast, reliable service while respecting user privacy. Our 
            commitment to transparency is reflected in our open-source codebase.
          </p>
        </div>
      </section>
    </main>
  );
}