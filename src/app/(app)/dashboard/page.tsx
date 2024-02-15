import type { Metadata } from "next";

import { Page } from "@/components/layout";

export const metadata: Metadata = { title: "dashboard" };

const DashboardPage = () => {
  return (
    <Page>
      <Page.Header heading="Dashboard" />
    </Page>
  );
};

export default DashboardPage;
