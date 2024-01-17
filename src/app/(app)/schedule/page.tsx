import type { Metadata } from "next";

import { Page } from "@/components/layout";
import { Heading } from "@/components/ui";

export const metadata: Metadata = { title: "schedule" };

const SchedulePage = () => {
  return (
    <Page>
      <Page.Heading>
        <Heading fontWeight="normal">Schedule</Heading>
      </Page.Heading>
    </Page>
  );
};

export default SchedulePage;
