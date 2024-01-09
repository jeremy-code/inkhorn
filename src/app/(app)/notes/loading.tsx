import { Spinner } from "@/components/ui";
import { styled } from "@/lib/styled/jsx";

const Loading = () => {
  return (
    <styled.div m="auto">
      <Spinner />
    </styled.div>
  );
};

export default Loading;
