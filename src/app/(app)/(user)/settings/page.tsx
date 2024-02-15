import type { Metadata } from "next";

import { Page } from "@/components/layout";
import { ToggleDarkMode } from "@/components/misc";
import { Box } from "@/lib/styled/jsx";

export const metadata: Metadata = { title: "settings" };

const SettingsPage = () => {
  return (
    <Page>
      <Page.Header heading="Settings" />
      <Box>
        <ToggleDarkMode />
      </Box>
    </Page>
  );
};

export default SettingsPage;
