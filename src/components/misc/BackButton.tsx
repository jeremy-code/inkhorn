"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { IconButton, type IconButtonProps } from "@/components/ui";

export const BackButton = (props: IconButtonProps) => {
  const router = useRouter();

  return (
    <IconButton {...props} variant="ghost" onClick={() => router.back()}>
      <ArrowLeft />
    </IconButton>
  );
};
