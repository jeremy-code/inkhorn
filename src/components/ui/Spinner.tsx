import React from "react";
import { css } from "styled-system/css";
import { Circle, splitCssProps } from "styled-system/jsx";
import type { HTMLStyledProps } from "styled-system/types";

type SpinnerProps = {
  isLoading?: boolean;
} & HTMLStyledProps<"div">;

// to change color, change prop borderTopColor
// unfortunately, no current way to change css prop name in panda css per
// "Due to the static nature of Panda, you can't rename properties at runtime."
// https://panda-css.com/docs/concepts/style-props
export const Spinner = ({ isLoading = true, ...props }: SpinnerProps) => {
  const [cssProps, rest] = splitCssProps(props);

  return (
    isLoading && (
      <Circle
        className={css(
          {
            border: "4px solid token(colors.gray.4)",
            borderTopColor: "blue.10",
            width: "24px",
            height: "24px",
            animation: "spin",
          },
          cssProps
        )}
        {...rest}
      />
    )
  );
};
