"use client";

import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { VirtualizedList } from "@/components/misc";
import { Combobox, IconButton, Input, Label } from "@/components/ui";

export type Item = {
  label: string;
  value: string;
  disabled?: boolean;
};

const AutocompleteItem = ({ item }: { item: Item }) => (
  <Combobox.Item item={item}>
    <Combobox.ItemText lineClamp="1">{item.label}</Combobox.ItemText>
    <Combobox.ItemIndicator>
      <Check />
    </Combobox.ItemIndicator>
  </Combobox.Item>
);

export type AutocompleteProps = {
  items: Item[];
  label: string;
  placeholder?: string;
} & Combobox.ComboboxProps;

export const Autocomplete = ({ items, label, placeholder, ...rest }: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Combobox.Root {...rest} onOpenChange={(e) => setIsOpen(e.open)} items={items}>
      <Combobox.Label asChild>
        {/* Since Combobox.Label has its own styles, overwrite to match with other labels */}
        <Label color="fg.muted" fontSize="md" fontWeight="normal">
          {label}
        </Label>
      </Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder={placeholder} asChild>
          <Input />
        </Combobox.Input>
        <Combobox.Trigger asChild>
          <IconButton variant="link" aria-label="open" size="xs">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          {/* Only virtualize list if there are more than 6 items, allows height to be variable */}
          {items.length <= 6 ? (
            <>
              {items.map((item, index) => (
                <AutocompleteItem key={`${index}-item`} item={item} />
              ))}
            </>
          ) : (
            <VirtualizedList
              count={items.length}
              estimateSize={() => 40}
              listItems={(key, index) => (
                <AutocompleteItem key={`${key}-item`} item={items[index]} />
              )}
            />
          )}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  );
};
