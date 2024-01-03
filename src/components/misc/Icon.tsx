import { icons, type LucideProps } from "lucide-react";
import { styled, type HTMLStyledProps } from "styled-system/jsx";

// since using Server Components, importing all icons will not increase bundle size
// and as a Server Component, will be streamed to the client
//
// do NOT use this in a client component, or the client bundle will bring in all icons
export const Icon = styled(({ name, ...rest }: { name: keyof typeof icons } & LucideProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...rest} />;
});

export type IconProps = HTMLStyledProps<typeof Icon>;
