"use client";

import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";

import { createStyleContext } from "@/lib/styled";
import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { avatar } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(avatar);

const Avatar = withProvider(styled(ArkAvatar.Root), "root");
const AvatarFallback = withContext(styled(ArkAvatar.Fallback), "fallback");
const AvatarImage = withContext(styled(ArkAvatar.Image), "image");

const Root = Avatar;
const Fallback = AvatarFallback;
const Image = AvatarImage;

export { Avatar, AvatarFallback, AvatarImage, Fallback, Image, Root };

export interface AvatarProps extends HTMLStyledProps<typeof Avatar> {}
export interface AvatarFallbackProps extends HTMLStyledProps<typeof AvatarFallback> {}
export interface AvatarImageProps extends HTMLStyledProps<typeof AvatarImage> {}
