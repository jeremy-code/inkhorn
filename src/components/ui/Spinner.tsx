import { Circle, type CircleProps } from "styled-system/jsx";

export type SpinnerProps = {
  isLoading?: boolean;
} & CircleProps;

export const Spinner = ({ isLoading = true, ...props }: SpinnerProps) => {
  return (
    isLoading && (
      <Circle
        border="4px solid token(colors.gray.4)"
        borderTopColor="colorPalette.6"
        // size 6 = 1.5rem = 24px, change height/width with size prop
        size="6"
        animation="spin"
        // change color with colorPalette prop
        colorPalette="primary"
        {...props}
      />
    )
  );
};
