import { FormButton } from "@/components/form";
import { Icon } from "@/components/misc";
import { Avatar, Button, IconButton, Link, Popover, Text } from "@/components/ui";
import { User } from "@/interfaces/database";
import { Box, Circle, Divider, HStack, Stack } from "@/lib/styled/jsx";
import { getUser, signOutAction } from "@/actions";

const ProfileAvatar = ({ image }: User) => {
  return (
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
};

export const ProfileSelector = async () => {
  const user = await getUser();

  return (
    <Popover.Root positioning={{ placement: "bottom-end" }}>
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
                <Icon name="X" />
              </IconButton>
            </Popover.CloseTrigger>
          </Box>
          <Stack gap={1}>
            <Popover.Title mb={2}>
              <HStack>
                <ProfileAvatar {...user} />
                <div>
                  <Text>{user.name}</Text>
                  <Text color="fg.muted">{user.email}</Text>
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
