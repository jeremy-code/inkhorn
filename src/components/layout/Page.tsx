import { Heading } from "@/components/ui";
import { Flex, HStack, type FlexProps, type HstackProps } from "@/lib/styled/jsx";

export const Page = ({ children, ...rest }: FlexProps) => {
  return (
    <Flex w="full" h="full" flexDir="column" {...rest}>
      {children}
    </Flex>
  );
};

const PageHeader = ({ children, heading, ...rest }: { heading?: string } & HstackProps) => {
  return (
    <HStack h="16" p="4" borderBottom="muted" justify="space-between" {...rest}>
      {heading && <Heading>{heading}</Heading>}
      {children}
    </HStack>
  );
};

Page.Header = PageHeader;
