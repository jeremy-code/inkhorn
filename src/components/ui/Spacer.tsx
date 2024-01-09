import { Flex, type FlexProps } from "@/lib/styled/jsx";

export const Spacer = (props: FlexProps) => {
  return <Flex {...props} flex="1" placeSelf="stretch" />;
};
