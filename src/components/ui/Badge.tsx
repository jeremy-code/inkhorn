import type { ComponentProps } from "react";
import { ark } from "@ark-ui/react/factory";

import { styled } from "@/lib/styled/jsx";
import { badge } from "@/lib/styled/recipes";

export const Badge = styled(ark.div, badge);
export type BadgeProps = ComponentProps<typeof Badge>;
