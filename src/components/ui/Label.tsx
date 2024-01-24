import type { ComponentProps } from "react";
import { ark } from "@ark-ui/react/factory";

import { styled } from "@/lib/styled/jsx";
import { formLabel } from "@/lib/styled/recipes";

export const Label = styled(ark.label, formLabel);
export type LabelProps = ComponentProps<typeof Label>;
