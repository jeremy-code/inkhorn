import type { ComponentProps } from "react";
import { Presence as ArkPresence } from "@ark-ui/react/presence";

import { styled } from "@/lib/styled/jsx";

export const Presence = styled(ArkPresence);
export type PresenceProps = ComponentProps<typeof Presence>;
