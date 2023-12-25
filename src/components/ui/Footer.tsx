import { cva, type RecipeVariantProps } from "styled-system/css";
import { styled, type HTMLStyledProps } from "styled-system/jsx";

import { Link } from "@/components/ui";

const footer = cva({
  base: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    p: 4,
    borderTop: "1px solid token(colors.gray.3)",
    gap: 1,
  },
});

export const Footer = styled((props) => {
  return (
    <footer {...props}>
      {"Made with ❤️ by "}
      <Link href="https://jeremy.ng/" target="_blank" rel="noreferrer noopener">
        Jeremy
      </Link>
    </footer>
  );
}, footer);

export type FooterProps = HTMLStyledProps<typeof Footer> & RecipeVariantProps<typeof footer>;
