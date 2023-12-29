import React from "react";
import { UserIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { Box, Circle, Divider, HStack, Stack, styled } from "styled-system/jsx";

import { FormButton } from "@/components/form";
import { Avatar, Button, IconButton, Link, Popover } from "@/components/ui";
import { getUser, signOutAction } from "@/actions";
import { User } from "@/interfaces";

const ProfileAvatar = (user: User) => {
  return (
    <Avatar.Root>
      {user.image ? (
        <Avatar.Image src={user.image} alt="avatar" />
      ) : (
        <Avatar.Fallback p={2} color="gray.8">
          <UserIcon />
        </Avatar.Fallback>
      )}
    </Avatar.Root>
  );
};

const ProfileSelector = async () => {
  const user = await getUser();

  if (!user) return;

  return (
    <Popover.Root
      positioning={{
        placement: "bottom-end",
      }}
    >
      <Popover.Trigger asChild>
        {/* Making this a circle as the Avatar is a rectangle, avoids awkward clicking/hovering over non-Avatar */}
        <Circle cursor="pointer">
          <ProfileAvatar {...user} />
        </Circle>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content minW="2xs">
          <Box position="absolute" top="1" right="1">
            <Popover.CloseTrigger asChild>
              <IconButton aria-label="Close Popover" variant="ghost" size="sm">
                <XMarkIcon />
              </IconButton>
            </Popover.CloseTrigger>
          </Box>
          <Stack gap={1}>
            <Popover.Title mb={2}>
              <HStack>
                <ProfileAvatar {...user} />
                <div>
                  <styled.p>{user.name}</styled.p>
                  <styled.p color="GrayText">{user.email}</styled.p>
                </div>
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
    </Popover.Root>
  );
};

export default ProfileSelector;
