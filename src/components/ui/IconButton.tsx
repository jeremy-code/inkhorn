import { ark } from "@ark-ui/react/factory";

import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { iconButton } from "@/lib/styled/recipes";

export const IconButton = styled(ark.button, iconButton);
export type IconButtonProps = HTMLStyledProps<typeof IconButton>;
