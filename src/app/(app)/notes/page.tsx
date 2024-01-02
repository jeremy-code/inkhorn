import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Toolbar } from "@/components/notes";

export const metadata: Metadata = {
  title: "notes | inkhorn",
};

const Editor = dynamic(() => import("@/components/notes/Editor"), { ssr: false });

const NotesPage = () => {
  return (
    <>
      Notes
      <Toolbar />
      <Editor />
    </>
  );
};

export default NotesPage;
