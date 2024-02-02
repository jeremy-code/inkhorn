import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Page } from "@/components/layout";
import { Toolbar } from "@/components/notes";
import { Heading } from "@/components/ui";

export const metadata: Metadata = { title: "notes" };

const Editor = dynamic(() => import("@/components/notes/Editor"));

const NotesPage = () => {
  return (
    <Page>
      <Page.Header>
        <Heading fontWeight="normal">Notes</Heading>
      </Page.Header>
      <Toolbar />
      <Editor />
    </Page>
  );
};

export default NotesPage;
