import { Link } from "@/components/ui";
import { cva, type RecipeVariantProps } from "@/lib/styled/css";
import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";

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

export const Footer = styled((props: HTMLStyledProps<"footer">) => {
  return (
    <styled.footer {...props}>
      {"Made with ❤️ by "}
      <Link
        href="https://jeremy.ng"
        colorPalette="primary"
        target="_blank"
        rel="noreferrer noopener"
      >
        Jeremy
      </Link>
    </styled.footer>
  );
}, footer);

export type FooterProps = HTMLStyledProps<typeof Footer> & RecipeVariantProps<typeof footer>;
