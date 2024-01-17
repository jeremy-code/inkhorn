import type { Metadata } from "next";

import { Page } from "@/components/layout";
import { Heading } from "@/components/ui";

export const metadata: Metadata = { title: "dashboard" };

const DashboardPage = () => {
  return (
    <Page>
      <Page.Heading>
        <Heading fontWeight="normal">Dashboard</Heading>
      </Page.Heading>
    </Page>
  );
};

export default DashboardPage;
