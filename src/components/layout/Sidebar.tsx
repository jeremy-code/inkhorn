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
      borderRight: "1px solid token(colors.border.muted)",
      transition: "all",
      display: "flex",
      flexDir: "column",
      justifyContent: "space-between",
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
          roundedLeft: "none",
          border: "1px solid token(colors.border.muted)",
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
    <Root open={open} {...rest}>
      <Trigger onClick={() => setOpen(!open)} className={iconButton({ variant: "ghost" })}>
        {open ? <PanelLeftClose /> : <PanelLeftOpen />}
      </Trigger>
      {children}
    </Root>
  );
};
