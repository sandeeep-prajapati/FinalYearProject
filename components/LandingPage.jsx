import React from "react";
import { ChevronRight, Code, Shield, Zap } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: "Smart Contract Development",
      description:
        "Build and deploy secure smart contracts with our advanced development tools",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Enterprise Security",
      description:
        "Military-grade security protocols protecting your blockchain assets",
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Lightning Fast",
      description:
        "High-performance infrastructure for rapid transaction processing",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">ChainLogic</div>
          <Link
            href="/api/auth/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            Get Started
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Build the Future of Decentralized Applications
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Deploy secure and scalable smart contracts on our next-generation
            blockchain platform. Experience the power of decentralized
            technology.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Start Building Today
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors"
            >
              <div className="bg-gray-700 p-3 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="text-4xl font-bold text-blue-400 mb-2">$1B+</div>
            <div className="text-gray-400">Total Value Locked</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="text-4xl font-bold text-blue-400 mb-2">100K+</div>
            <div className="text-gray-400">Smart Contracts Deployed</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="text-4xl font-bold text-blue-400 mb-2">50ms</div>
            <div className="text-gray-400">Average Transaction Time</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
