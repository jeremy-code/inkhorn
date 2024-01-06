"use client";

import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { Combobox, IconButton, Input } from "@/components/ui";

export type Item = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type AutocompleteProps = {
  items: Item[];
  label: string;
  placeholder?: string;
  onInputValueChange: (details: { value: string }) => void;
} & Combobox.ComboboxProps;

export const Autocomplete = ({ items, label, placeholder, ...rest }: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Combobox.Root {...rest} onOpenChange={(e) => setIsOpen(e.open)} items={items}>
      <Combobox.Label>{label}</Combobox.Label>
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
          {items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  );
};
