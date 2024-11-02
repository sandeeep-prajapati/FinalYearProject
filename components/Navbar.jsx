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
    <nav className="px-4 py-2 bg-gray-50 rounded-2xl border border-gray-200">
      <div className="flex items-center justify-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setActiveTab(item.id)}
            className={`relative px-4 py-2 rounded-xl transition-all duration-200
              ${activeTab === item.id 
                ? "text-black bg-gray-100 border border-gray-200 shadow-sm" 
                : "text-gray-500 hover:text-black hover:bg-gray-50"
              }`}
          >
            {/* Text content */}
            <span className="text-sm font-medium tracking-wide">
              {item.name}
            </span>

            {/* Simple active indicator dot */}
            {activeTab === item.id && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 
                            bg-black rounded-full"/>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;