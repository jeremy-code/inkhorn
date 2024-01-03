import { styled } from "styled-system/jsx";

import { Spinner } from "@/components/ui";

const Loading = () => {
  return (
    <styled.div m="auto">
      <Spinner />
    </styled.div>
  );
};

export default Loading;
