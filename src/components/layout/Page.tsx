import React, { type ReactNode } from "react";

import { Flex, type FlexProps } from "@/lib/styled/jsx";

type PageProps = { children?: ReactNode } & FlexProps;

export const Page = ({ children, ...rest }: PageProps) => {
  return (
    <Flex w="full" h="full" flexDir="column" {...rest}>
      {children}
    </Flex>
  );
};

const PageHeader = ({ children, ...rest }: PageProps) => {
  return (
    <Flex h="16" p="4" borderBottom="muted" justify="space-between" align="center" {...rest}>
      {children}
    </Flex>
  );
};

Page.Header = PageHeader;
