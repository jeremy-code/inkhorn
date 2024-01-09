import { ark } from "@ark-ui/react/factory";

import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { badge } from "@/lib/styled/recipes";

export const Badge = styled(ark.div, badge);
export type BadgeProps = HTMLStyledProps<typeof Badge>;
