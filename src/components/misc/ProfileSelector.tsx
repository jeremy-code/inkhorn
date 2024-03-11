import React, { type ReactNode } from "react";

import { FormButton } from "@/components/form";
import { Icon } from "@/components/misc";
import { Avatar, Button, IconButton, Link, Popover, Text } from "@/components/ui";
import { Box, Divider, HStack, Stack } from "@/lib/styled/jsx";
import { signOutAction } from "@/actions/auth";
import { getUser } from "@/actions/user";

export const ProfileInfo = async () => {
  const user = await getUser();

  return (
    <Box lineHeight="tight">
      <Text truncate>{user.name}</Text>
      <Text color="fg.muted" fontSize="sm" truncate>
        {user.email}
      </Text>
    </Box>
  );
};

const ProfilePopover = async () => {
  const user = await getUser();

  return (
    <Popover.Positioner>
      <Popover.Content minW="2xs">
        <Box pos="absolute" top="1" right="1">
          <Popover.CloseTrigger asChild>
            <IconButton aria-label="Close Popover" variant="ghost" size="sm">
              <Icon name="X" />
            </IconButton>
          </Popover.CloseTrigger>
        </Box>
        <Stack gap={1}>
          <Popover.Title mb={2}>
            <HStack>
              <Avatar src={user.image} name={user.name ?? "Unknown"} />
              <ProfileInfo />
            </HStack>
          </Popover.Title>
          <Link href="/profile" underline="none">
            <Button variant="ghost" w="full">
              Profile
            </Button>
          </Link>
          <Link href="/settings" underline="none">
            <Button variant="ghost" w="full">
              Settings
            </Button>
          </Link>
          <Divider my={2} />
          <FormButton action={signOutAction} w="full">
            Logout
          </FormButton>
        </Stack>
      </Popover.Content>
    </Popover.Positioner>
  );
};

export const ProfileSelector = async ({ children }: { children?: ReactNode }) => {
  const user = await getUser();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <HStack
          h="full"
          rounded="l2"
          px={2}
          justify="center"
          cursor="pointer"
          bg={{ base: "bg.subtle", _hover: "bg.muted" }}
        >
          <Avatar src={user.image} name={user.name ?? "Unknown"} />
          {children}
        </HStack>
      </Popover.Trigger>
      <ProfilePopover />
    </Popover.Root>
  );
};
