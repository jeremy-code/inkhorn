import Image from "next/image";

import { NavLink, SidebarAddon } from "@/components/layout";
import { Icon, ProfileInfo, ProfileSelector } from "@/components/misc";
import { Link, Spacer } from "@/components/ui";
import { Box, styled } from "@/lib/styled/jsx";
import { NAV_ITEMS } from "@/utils/constants";
import { logo } from "@/assets";

/**
 * The reason <SidebarContent /> is a separate component from <Sidebar /> is that Sidebar needs
 * client side rendering (due to using state). To allow SSR, the content will be rendered on the server
 * as children of <Sidebar />.
 */
export const SidebarContent = () => {
  return (
    <>
      <styled.header
        h="16"
        p="4"
        display="flex"
        justifyContent="center"
        borderBottom="1px solid token(colors.border.muted)"
      >
        <Link href="/dashboard" fontWeight="medium" fontSize="lg" linkDecor={false}>
          <Image src={logo} alt="inkhorn logo" width={15} height={15} priority />
          <SidebarAddon>inkhorn</SidebarAddon>
        </Link>
        {/* Filler item for Sidebar Trigger */}
        <SidebarAddon flex="1" />
      </styled.header>

      <styled.nav p="4" display="flex" flexDir="column" gap={1}>
        {NAV_ITEMS.map(({ href, icon, label }) => (
          <NavLink key={href} href={href} justifyContent="center">
            <Icon name={icon} />
            <SidebarAddon flex="1">{label}</SidebarAddon>
          </NavLink>
        ))}
      </styled.nav>

      <Spacer />

      <Box h="20" maxW="full" p="4" borderTop="1px solid token(colors.border.muted)">
        <ProfileSelector>
          <SidebarAddon flex="1">
            <ProfileInfo />
          </SidebarAddon>
        </ProfileSelector>
      </Box>
    </>
  );
};
