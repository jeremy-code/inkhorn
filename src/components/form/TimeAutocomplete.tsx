import { Autocomplete, type AutocompleteProps, type Item } from "@/components/form";
import { createTimeSlots } from "@/utils/common";

export type TimeAutocompleteProps = {
  label: string;
} & Partial<AutocompleteProps>;

export const TimeAutocomplete = (props: TimeAutocompleteProps) => {
  const items: Item[] = createTimeSlots().map((v) => ({ label: v, value: v }));

  return <Autocomplete items={items} placeholder="hh:ss" {...props} />;
};
