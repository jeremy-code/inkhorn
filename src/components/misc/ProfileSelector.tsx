import React, { type ReactNode } from "react";

import { FormButton } from "@/components/form";
import { Icon } from "@/components/misc";
import { Avatar, Button, IconButton, Link, Popover, Text } from "@/components/ui";
import { User } from "@/interfaces/database";
import { Box, Divider, HStack, Stack } from "@/lib/styled/jsx";
import { getUser, signOutAction } from "@/actions";

const ProfileAvatar = ({ image }: User) => (
  <Avatar.Root>
    {image ? (
      <Avatar.Image src={image} alt="avatar" />
    ) : (
      <Avatar.Fallback p={2} color="gray.8">
        <Icon name="User" />
      </Avatar.Fallback>
    )}
  </Avatar.Root>
);

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
              <ProfileAvatar {...user} />
              <ProfileInfo />
            </HStack>
          </Popover.Title>
          <Link href="/profile" linkDecor={false}>
            <Button variant="ghost" w="full">
              Profile
            </Button>
          </Link>
          <Link href="/settings" linkDecor={false}>
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
          <ProfileAvatar {...user} />
          {children}
        </HStack>
      </Popover.Trigger>
      <ProfilePopover />
    </Popover.Root>
  );
};
