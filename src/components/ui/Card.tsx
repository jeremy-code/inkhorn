"use client";

import type { ComponentProps } from "react";
import { ark } from "@ark-ui/react/factory";

import { createStyleContext } from "@/lib/styled";
import { styled } from "@/lib/styled/jsx";
import { card } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(card);

export const Root = withProvider(styled(ark.div), "root");
export const Body = withContext(styled(ark.div), "body");
export const Description = withContext(styled(ark.p), "description");
export const Footer = withContext(styled(ark.div), "footer");
export const Header = withContext(styled(ark.div), "header");
export const Title = withContext(styled(ark.h3), "title");

export type CardProps = ComponentProps<typeof Root>;
export type CardBodyProps = ComponentProps<typeof Body>;
export type CardDescriptionProps = ComponentProps<typeof Description>;
export type CardFooterProps = ComponentProps<typeof Footer>;
export type CardHeaderProps = ComponentProps<typeof Header>;
export type CardTitleProps = ComponentProps<typeof Title>;
