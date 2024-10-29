"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const navItems = [
    { name: "Dashboard", href: "/", id: "dashboard" },
    { name: "Admin", href: "/", id: "admin" },
    { name: "Teachers", href: "/", id: "teachers" },
    { name: "Question Paper", href: "/", id: "questions" }
  ];

  return (
    <nav className="p-4 backdrop-blur-sm bg-black/20 rounded-2xl border border-gray-800">
      <div className="flex items-center justify-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setActiveTab(item.id)}
            className={`relative group px-4 py-2 rounded-xl transition-all duration-300
              ${activeTab === item.id 
                ? "text-white bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30" 
                : "text-gray-300 hover:text-white"
              }`}
          >
            {/* Hover gradient effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 
                          group-hover:opacity-10 transition-opacity duration-300"/>
            
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 
                          opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"/>
            
            {/* Text content */}
            <span className="relative z-10 text-sm font-medium tracking-wide">
              {item.name}
            </span>

            {/* Active indicator dot */}
            {activeTab === item.id && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 
                            bg-indigo-500 rounded-full"/>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;