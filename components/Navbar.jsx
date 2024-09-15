"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-4 ">
      <Link href='/' className="py-1 px-4 rounded-lg transition-all hover:bg-white hover:text-black text-lg tracking-wide ">Dashboard</Link>
      <Link href='/' className="py-1 px-4 rounded-lg transition-all hover:bg-white hover:text-black text-lg tracking-wide ">Admin</Link>
      <Link href='/' className="py-1 px-4 rounded-lg transition-all hover:bg-white hover:text-black text-lg tracking-wide ">Teachers</Link>
      <Link href='/' className="py-1 px-4 rounded-lg transition-all hover:bg-white hover:text-black text-lg tracking-wide ">Question Paper</Link>
    </div>
  );
};

export default Navbar;
