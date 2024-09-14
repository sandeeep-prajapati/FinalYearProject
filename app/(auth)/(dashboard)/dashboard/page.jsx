"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="w-full h-screen p-4">
      <div className="w-full flex p-2 bg-zinc-800 justify-between rounded-md">
        <Navbar />
        <div className="flex gap-2">
        <Button variant='ghost'>Signup</Button>
        <Button variant='ghost'>Login</Button>
        </div>

      </div>
      

    </div>
  );
};

export default Dashboard;
