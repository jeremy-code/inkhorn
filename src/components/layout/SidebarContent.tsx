import Image from "next/image";

import { NavLink, SidebarAddon } from "@/components/layout";
import { Icon, ProfileInfo, ProfileSelector } from "@/components/misc";
import { Link, Spacer } from "@/components/ui";
import { Box } from "@/lib/styled/jsx";
import { flex, stack } from "@/lib/styled/patterns";
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
      {/* logo */}
      <header className={flex({ h: 16, p: 4, justify: "center", borderBottom: "muted" })}>
        <Link href="/dashboard" fontWeight="medium" fontSize="lg" linkDecor={false}>
          <Image src={logo} alt="inkhorn logo" height={16} style={{ width: "auto" }} priority />
          <SidebarAddon>inkhorn</SidebarAddon>
        </Link>
        {/* Filler item for Sidebar Trigger */}
        <SidebarAddon flex="1" />
      </header>

      {/* nav items */}
      <nav className={stack({ p: 4 })}>
        {NAV_ITEMS.map(({ href, icon, label }) => (
          <NavLink key={href} href={href} justifyContent="center">
            <Icon name={icon} />
            <SidebarAddon flex="1">{label}</SidebarAddon>
          </NavLink>
        ))}
      </nav>

      <Spacer />

      {/* profile */}
      <Box h="20" maxW="full" p="4" borderTop="muted">
        <ProfileSelector>
          <SidebarAddon flex="1">
            <ProfileInfo />
          </SidebarAddon>
        </ProfileSelector>
      </Box>
    </>
  );
};
