import { Page } from "@/components/layout";
import { Heading, Spinner } from "@/components/ui";
import { styled } from "@/lib/styled/jsx";

const Loading = () => {
  return (
    <Page>
      <Page.Header>
        <Heading fontWeight="normal">Notes</Heading>
      </Page.Header>
      <styled.div m="auto">
        <Spinner />
      </styled.div>
    </Page>
  );
};

export default Loading;
