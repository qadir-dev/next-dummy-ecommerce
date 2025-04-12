"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h1 className="text-5xl font-bold mb-4">404</h1>

      <Button onClick={() => router.push("/")} variant="alert">
        Home Page
      </Button>
    </div>
  );
}
