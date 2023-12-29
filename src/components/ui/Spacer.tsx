import { Flex, type FlexProps } from "styled-system/jsx";

export const Spacer = (props: FlexProps) => {
  return <Flex {...props} flex="1" placeSelf="stretch" />;
};
