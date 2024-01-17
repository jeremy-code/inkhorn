import type { Metadata } from "next";

import { Page } from "@/components/layout";
import { Heading } from "@/components/ui";

export const metadata: Metadata = { title: "settings" };

const SettingsPage = () => {
  return (
    <Page>
      <Page.Heading>
        <Heading fontWeight="normal">Settings</Heading>
      </Page.Heading>
    </Page>
  );
};

export default SettingsPage;
