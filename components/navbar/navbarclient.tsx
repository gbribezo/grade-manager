"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const NavbarClient = () => {
  const pathname = usePathname();

  if (pathname === "/student/login" || pathname === "/student/register") return null;

  return <Navbar/>;
};

export default NavbarClient;