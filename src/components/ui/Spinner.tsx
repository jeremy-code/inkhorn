import React from "react";
import { css } from "styled-system/css";
import { Circle, splitCssProps } from "styled-system/jsx";
import type { HTMLStyledProps } from "styled-system/types";

type SpinnerProps = {
  isLoading?: boolean;
  color?: string;
} & HTMLStyledProps<"div">;

export const Spinner = ({ isLoading = true, color = "#3498db", ...props }: SpinnerProps) => {
  const [cssProps, rest] = splitCssProps(props);

  return (
    isLoading && (
      <Circle
        className={css(
          {
            border: "4px solid #f3f3f3",
            borderTopColor: color,
            width: "24px",
            height: "24px",
            animation: "spin 1s linear infinite",
          },
          cssProps
        )}
        {...rest}
      />
    )
  );
};
