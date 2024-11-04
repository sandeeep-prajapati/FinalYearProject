"use client";
import { BookOpenCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import WalletCard from "@/components/WalletCard";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const navItems = [
    { name: "Dashboard", href: "/dashboard", id: "dashboard" },
    { name: "Admin", href: "/", id: "admin" },
    { name: "Teachers", href: "/", id: "teachers" },
    { name: "Question Paper", href: "/questions", id: "questions" },
  ];

  return (
    <div className="w-full backdrop-blur-sm bg-zinc-900/70 rounded-xl border border-zinc-800/50 shadow-xl">
      <div className="w-full h-16 flex items-center px-6">
        {/* Left Section - Fixed width */}
        <div className="w-48 flex items-center gap-2">
          <BookOpenCheck className="h-6 w-6 text-white" />
          <span className="text-lg font-semibold text-white">EduPortal</span>
        </div>

        {/* Center Section (Navbar) - Exact center */}
        <div className="flex-1 flex justify-center items-center">
          <div className="absolute left-1/2 -translate-x-1/2">
            <nav className="px-4 py-1 bg-gray-300 rounded-2xl border border-gray-200">
              <div className="flex items-center justify-center gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative px-4 py-2 rounded-xl transition-all duration-200
              ${
                activeTab === item.id
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
                      <div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 
                            bg-black rounded-full"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Right Section - Fixed width */}
        <div className="w-48 flex items-center gap-4 justify-end">
          <WalletCard/>
          <div className="w-px h-6 bg-zinc-800/50" />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
