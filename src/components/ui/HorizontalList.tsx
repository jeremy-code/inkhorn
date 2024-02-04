import { cva } from "@/lib/styled/css";
import { styled } from "@/lib/styled/jsx";

const horizontalList = cva({ base: { listStyle: "none", display: "inline" } });

const horizontalListItem = cva({
  base: {
    display: "inline",
    _after: {
      // https://www.compart.com/en/unicode/U+2022
      content: "'\\2022'",
      mx: "1",
    },
    _last: { _after: { content: "none" } },
  },
});

const Root = styled("ul", horizontalList);
const Item = styled("li", horizontalListItem);

export const HorizontalList = { Root, Item };
