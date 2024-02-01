import type { Metadata } from "next";

import { Page } from "@/components/layout";
import { ToggleDarkMode } from "@/components/misc";
import { Heading } from "@/components/ui";
import { Box } from "@/lib/styled/jsx";

export const metadata: Metadata = { title: "settings" };

const SettingsPage = () => {
  return (
    <Page>
      <Page.Heading>
        <Heading fontWeight="normal">Settings</Heading>
      </Page.Heading>
      <Box>
        <ToggleDarkMode />
      </Box>
    </Page>
  );
};

export default SettingsPage;
