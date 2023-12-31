import { Icon } from "@/components/misc";
import { ToggleGroup } from "@/components/ui";

export const Toolbar = () => {
  return (
    <ToggleGroup.Root multiple>
      <ToggleGroup.Item value="bold" aria-label="Toggle Bold">
        <Icon name="Bold" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="italic" aria-label="Toggle Italic">
        <Icon name="Italic" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="underline" aria-label="Toggle Underline">
        <Icon name="Underline" />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
