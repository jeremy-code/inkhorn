import { ark } from "@ark-ui/react/factory";

import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { formLabel } from "@/lib/styled/recipes";

export const Label = styled(ark.label, formLabel);
export type LabelProps = HTMLStyledProps<typeof Label>;
