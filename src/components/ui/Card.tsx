"use client";

import { ark } from "@ark-ui/react/factory";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { card } from "styled-system/recipes";

import { createStyleContext } from "@/utils";

const { withProvider, withContext } = createStyleContext(card);

const Card = withProvider(styled(ark.div), "root");
const CardBody = withContext(styled(ark.div), "body");
const CardDescription = withContext(styled(ark.p), "description");
const CardFooter = withContext(styled(ark.div), "footer");
const CardHeader = withContext(styled(ark.div), "header");
const CardTitle = withContext(styled(ark.h3), "title");

const Root = Card;
const Body = CardBody;
const Description = CardDescription;
const Footer = CardFooter;
const Header = CardHeader;
const Title = CardTitle;

export {
  Body,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Description,
  Footer,
  Header,
  Root,
  Title,
};

export type CardProps = HTMLStyledProps<typeof Card>;
export type CardBodyProps = HTMLStyledProps<typeof CardBody>;
export type CardDescriptionProps = HTMLStyledProps<typeof CardDescription>;
export type CardFooterProps = HTMLStyledProps<typeof CardFooter>;
export type CardHeaderProps = HTMLStyledProps<typeof CardHeader>;
export type CardTitleProps = HTMLStyledProps<typeof CardTitle>;
