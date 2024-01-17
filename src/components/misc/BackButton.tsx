"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { IconButton } from "@/components/ui";

export const BackButton = () => {
  const router = useRouter();

  return (
    <IconButton variant="ghost" onClick={() => router.back()}>
      <ArrowLeft />
    </IconButton>
  );
};
