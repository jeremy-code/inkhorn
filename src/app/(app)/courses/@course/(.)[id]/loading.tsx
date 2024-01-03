import { styled } from "styled-system/jsx";

import { Card, Spinner } from "@/components/ui";

const Loading = () => {
  return (
    <Card.Root animation="drawer-in-right" h="full" w="full" minW="lg" m={2}>
      <Spinner m="auto" />
    </Card.Root>
  );
};

export default Loading;
