'use client'

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const ConditionalNavbar = () => {
  const pathname = usePathname();
  return <>{pathname != "/" && <Navbar />}</>;
};

export default ConditionalNavbar;
