import type { Metadata } from "next";

import { Page } from "@/components/layout";

export const metadata: Metadata = { title: "profile" };

const ProfilePage = () => {
  return (
    <Page>
      <Page.Header heading="Profile" />
    </Page>
  );
};

export default ProfilePage;
