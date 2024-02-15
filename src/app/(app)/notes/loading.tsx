import { Page } from "@/components/layout";
import { Spinner } from "@/components/ui";
import { styled } from "@/lib/styled/jsx";

const Loading = () => {
  return (
    <Page>
      <Page.Header heading="Notes" />
      <styled.div m="auto">
        <Spinner />
      </styled.div>
    </Page>
  );
};

export default Loading;
