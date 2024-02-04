"use client";

import React, { useState, type ComponentProps } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { createStyleContext } from "@/lib/styled";
import { sva } from "@/lib/styled/css";
import { Box } from "@/lib/styled/jsx";
import { iconButton } from "@/lib/styled/recipes";

const sidebar = sva({
  slots: ["root", "trigger", "addon"],
  base: {
    root: {
      pos: "relative",
      bg: "bg.subtle",
      borderRight: "muted",
      display: "flex",
      flexDir: "column",
      justifyContent: "space-between",
      transition: "all",
      zIndex: "banner",
    },
    trigger: {
      pos: "absolute",
      // Keep sidebar toggle trigger to the right
      right: "0",
      translate: "auto",
      bg: { base: "bg.subtle", _hover: "bg.muted" },
    },
  },
  variants: {
    open: {
      true: {
        root: { w: "xs" },
        // Move trigger to the center of a 4rem/16 tall header
        trigger: { m: "3" },
      },
      false: {
        root: { w: "20" },
        trigger: {
          // Move trigger to the immediate right of the sidebar
          x: "full",
          mt: "3",
          zIndex: "banner",
          border: "muted",
          roundedLeft: "none",
          borderLeft: "none",
        },
        addon: { display: "none" },
      },
    },
  },
  defaultVariants: { open: true },
});

const { withProvider, withContext } = createStyleContext(sidebar);

const Root = withProvider("aside", "root");
const Trigger = withContext("button", "trigger");
export const SidebarAddon = withContext(Box, "addon");

export const Sidebar = ({ children, ...rest }: ComponentProps<typeof Root>) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Root open={open} {...rest}>
        <Trigger onClick={() => setOpen(!open)} className={iconButton({ variant: "ghost" })}>
          {open ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Trigger>
        {children}
      </Root>
      {/* Filler item to prevent Trigger overlapping with other items due to being absolutely positioned */}
      <Box
        display={open ? "none" : "block"}
        // Width is 39px since the trigger is 40px wide and absolutely positioned (so on top of border of 1px width)
        w="39px"
        h="16"
        borderBottom="muted"
        flex="none"
      />
    </>
  );
};
