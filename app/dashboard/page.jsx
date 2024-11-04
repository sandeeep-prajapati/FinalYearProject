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
  return (<>
      <div className=" p-4 backdrop-blur-sm bg-zinc-800/50 rounded-xl border border-zinc-800/50">
        <h1 className="text-2xl font-semibold text-white text-center ">
          Welcome to Dashboard
        </h1>
      </div>
  
      <FileUpload  />
  </>
   
  );
};

export default Dashboard;
