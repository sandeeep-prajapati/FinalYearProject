"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpenCheck } from "lucide-react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Profile from "@/components/Profile";

const Dashboard = () => {
  const { isLoading, error, user } = useUser();
  // const {user}=useUser()
  console.log(user);
  return (
    <div className="w-full h-screen p-4 ">
      <div className="w-full flex py-2 px-4 bg-zinc-800 items-center justify-between rounded-md">
        <BookOpenCheck />
        <Navbar />
        <div className="flex gap-2 items-center">
          {user ? (
            <div className="flex gap-2 items-center">
              <Profile isLoading={isLoading} error={error} user={user} />
              <Link
                className=" py-1 px-3 bg-red-600 rounded-md"
                href="/api/auth/logout"
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              href="/api/auth/login"
              variant="ghost"
              className=" text-sm hover:bg-blue-500 py-2 px-3 rounded-md  hover:text-white"
            >
              Sign-in / Sign-up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
