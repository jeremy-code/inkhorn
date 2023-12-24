import React from "react";
import { css, cx } from "styled-system/css";
import type { HTMLStyledProps } from "styled-system/jsx";
import { flex } from "styled-system/patterns";

type FooterProps = HTMLStyledProps<"div">;

export const Footer = (props: FooterProps) => {
  return (
    <footer
      className={cx(
        flex({
          align: "center",
          justify: "center",
          p: 4,
          borderTop: "1px solid token(colors.gray.3)",
        }),
        css({ ...props })
      )}
    >
      Made with ❤️ by Jeremy
    </footer>
  );
};
