"use client";

import { ark } from "@ark-ui/react/factory";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { card } from "styled-system/recipes";

import { createStyleContext } from "@/lib/styled";

const { withProvider, withContext } = createStyleContext(card);

const Root = withProvider(styled(ark.div), "root");
const Body = withContext(styled(ark.div), "body");
const Description = withContext(styled(ark.p), "description");
const Footer = withContext(styled(ark.div), "footer");
const Header = withContext(styled(ark.div), "header");
const Title = withContext(styled(ark.h3), "title");

export { Body, Description, Footer, Header, Root, Title };

export type CardProps = HTMLStyledProps<typeof Root>;
export type CardBodyProps = HTMLStyledProps<typeof Body>;
export type CardDescriptionProps = HTMLStyledProps<typeof Description>;
export type CardFooterProps = HTMLStyledProps<typeof Footer>;
export type CardHeaderProps = HTMLStyledProps<typeof Header>;
export type CardTitleProps = HTMLStyledProps<typeof Title>;
