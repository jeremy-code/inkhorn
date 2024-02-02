import type { Metadata } from "next";

import { Page } from "@/components/layout";
import { Heading } from "@/components/ui";

export const metadata: Metadata = { title: "profile" };

const ProfilePage = () => {
  return (
    <Page>
      <Page.Header>
        <Heading fontWeight="normal">Profile</Heading>
      </Page.Header>
    </Page>
  );
};

export default ProfilePage;
