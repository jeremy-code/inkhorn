"use client";

import type { ComponentProps } from "react";
import { ark } from "@ark-ui/react/factory";

import { createStyleContext } from "@/lib/styled";
import { styled } from "@/lib/styled/jsx";
import { card } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(card);

const Root = withProvider(styled(ark.div), "root");
const Body = withContext(styled(ark.div), "body");
const Description = withContext(styled(ark.p), "description");
const Footer = withContext(styled(ark.div), "footer");
const Header = withContext(styled(ark.div), "header");
const Title = withContext(styled(ark.h3), "title");

export { Body, Description, Footer, Header, Root, Title };

export type CardProps = ComponentProps<typeof Root>;
export type CardBodyProps = ComponentProps<typeof Body>;
export type CardDescriptionProps = ComponentProps<typeof Description>;
export type CardFooterProps = ComponentProps<typeof Footer>;
export type CardHeaderProps = ComponentProps<typeof Header>;
export type CardTitleProps = ComponentProps<typeof Title>;
