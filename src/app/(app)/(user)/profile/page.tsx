import type { Metadata } from "next";

import { Page } from "@/components/layout";
import { Heading } from "@/components/ui";

export const metadata: Metadata = { title: "profile" };

const ProfilePage = () => {
  return (
    <Page>
      <Page.Heading>
        <Heading fontWeight="normal">Profile</Heading>
      </Page.Heading>
    </Page>
  );
};

export default ProfilePage;
