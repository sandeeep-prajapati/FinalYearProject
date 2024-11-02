"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpenCheck } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import WalletCard from "@/components/WalletCard";
import FileUpload from "@/components/Uploader";
// import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black p-4 flex flex-col gap-3">
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
              <Navbar />
            </div>
          </div>

          {/* Right Section - Fixed width */}
          <div className="w-48 flex items-center gap-4 justify-end">
            <WalletCard />
            <div className="w-px h-6 bg-zinc-800/50" />
            <UserButton />
          </div>
        </div>
      </div>

      <div className=" p-4 backdrop-blur-sm bg-zinc-800/50 rounded-xl border border-zinc-800/50">
        <h1 className="text-2xl font-semibold text-white text-center ">
          Welcome to Dashboard
        </h1>
      </div>
  
      <FileUpload  />
    </div>
  );
};

export default Dashboard;
