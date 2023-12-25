import { css } from "styled-system/css";
import { Circle, splitCssProps } from "styled-system/jsx";
import type { HTMLStyledProps } from "styled-system/types";

export type SpinnerProps = {
  isLoading?: boolean;
} & HTMLStyledProps<"div">;

export const Spinner = ({ isLoading = true, ...props }: SpinnerProps) => {
  const [cssProps, rest] = splitCssProps(props);

  return (
    isLoading && (
      <Circle
        className={css(cssProps, {
          border: "4px solid token(colors.gray.4)",
          borderTopColor: "colorPalette.10",
          width: "24px",
          height: "24px",
          animation: "spin",
          // change color with colorPalette prop
          colorPalette: "blue",
        })}
        {...rest}
      />
    )
  );
};
