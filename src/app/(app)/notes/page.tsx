import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "notes | inkhorn",
};

const Editor = dynamic(() => import("@/components/notes/Editor"), { ssr: false });

const NotesPage = () => {
  return (
    <>
      Notes
      <Editor />
    </>
  );
};

export default NotesPage;
