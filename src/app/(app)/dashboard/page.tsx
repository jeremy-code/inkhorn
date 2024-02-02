import type { Metadata } from "next";

import { Page } from "@/components/layout";
import { Heading } from "@/components/ui";

export const metadata: Metadata = { title: "dashboard" };

const DashboardPage = () => {
  return (
    <Page>
      <Page.Header>
        <Heading fontWeight="normal">Dashboard</Heading>
      </Page.Header>
    </Page>
  );
};

export default DashboardPage;
