"use client";

import { forwardRef } from "react";
import { Avatar as ArkAvatar, type AvatarProps as ArkAvatarProps } from "@ark-ui/react/avatar";
import { User } from "lucide-react";

import { css, cx } from "@/lib/styled/css";
import { avatar, type AvatarVariantProps } from "@/lib/styled/recipes";
import type { Assign, JsxStyleProps } from "@/lib/styled/types";

export type AvatarProps = {
  name?: string;
  src?: string | null;
} & Assign<JsxStyleProps, ArkAvatarProps> &
  AvatarVariantProps;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const [variantProps, avatarProps] = avatar.splitVariantProps(props);
  const { name, src, ...rootProps } = avatarProps;
  const styles = avatar(variantProps);

  return (
    <ArkAvatar.Root ref={ref} className={cx(styles.root, css(rootProps))} {...rootProps}>
      <ArkAvatar.Fallback className={styles.fallback}>
        {getInitials(name) || <User />}
      </ArkAvatar.Fallback>
      {src && <ArkAvatar.Image className={styles.image} src={src} alt={name} />}
    </ArkAvatar.Root>
  );
});

Avatar.displayName = "Avatar";

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((part) => part[0])
    .splice(0, 2)
    .join("")
    .toUpperCase();
