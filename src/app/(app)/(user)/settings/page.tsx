import type { Metadata } from "next";

import { Page } from "@/components/layout";
import { ToggleDarkMode } from "@/components/misc";
import { Heading } from "@/components/ui";
import { Box } from "@/lib/styled/jsx";

export const metadata: Metadata = { title: "settings" };

const SettingsPage = () => {
  return (
    <Page>
      <Page.Header>
        <Heading fontWeight="normal">Settings</Heading>
      </Page.Header>
      <Box>
        <ToggleDarkMode />
      </Box>
    </Page>
  );
};

export default SettingsPage;
