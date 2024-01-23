import { Spinner } from "@/components/ui";
import { Box, Stack } from "@/lib/styled/jsx";

const Loading = () => {
  return (
    <Box w="full" h="full" maxW="100%" overflow="hidden">
      <Stack animation="drawer-in-right" h="full" w="full" minW="lg">
        <Spinner m="auto" />
      </Stack>
    </Box>
  );
};

export default Loading;
