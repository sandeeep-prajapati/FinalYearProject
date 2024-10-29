"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpenCheck } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import WalletCard from "@/components/WalletCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-4">
      <div className="w-full backdrop-blur-sm bg-zinc-800/70 rounded-xl border border-zinc-700/50 shadow-xl">
        <div className="flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <BookOpenCheck className="h-6 w-6 text-indigo-400" />
            <span className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
              EduPortal
            </span>
          </div>

          <Navbar />

          <div className="flex items-center gap-4">
            <WalletCard />
            <div className="w-px h-6 bg-zinc-700/50" />
            <UserButton />
          </div>
        </div>
      </div>

      <div className="mt-6 p-6 backdrop-blur-sm bg-zinc-800/30 rounded-xl border border-zinc-700/50">
        <h1 className="text-2xl font-semibold text-gray-100 mb-4">
          Welcome to Dashboard
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
