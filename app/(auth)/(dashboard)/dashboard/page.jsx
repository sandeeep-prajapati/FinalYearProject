"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpenCheck } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="w-full h-screen p-4 ">
      <div className="w-full flex py-2 px-4 bg-zinc-800 items-center justify-between rounded-md">
        <BookOpenCheck />
        <Navbar />
        <div className="flex gap-2">
          <Button variant="ghost">Signup</Button>
          <Button variant="ghost">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
