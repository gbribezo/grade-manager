"use client";

import { useRouter } from "next/navigation";

const Navigate = (path: string) => {
  const router = useRouter();
  return () => router.push(path);
};

export default Navigate;