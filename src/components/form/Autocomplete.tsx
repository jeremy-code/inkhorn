"use client";

import React, { useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { styled } from "styled-system/jsx";

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
  virtualizerOptions?: Partial<Parameters<typeof useVirtualizer>[0]>;
} & Combobox.ComboboxProps;

export const Autocomplete = ({
  items,
  label,
  placeholder,
  virtualizerOptions,
  ...rest
}: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    ...virtualizerOptions,
  });

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
        <Combobox.Content asChild>
          {/* Only virtualize list if there are more than 6 items, allows height to be variable */}
          {items.length <= 6 ? (
            <div>
              {items.map((item, index) => (
                <Combobox.Item key={`${index}-${item.value}-item`} item={item}>
                  <Combobox.ItemText lineClamp="1">{item.label}</Combobox.ItemText>
                  <Combobox.ItemIndicator>
                    <Check />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </div>
          ) : (
            <styled.div ref={parentRef} h="xs" overflow="auto">
              <styled.div h={`${virtualizer.getTotalSize()}px`} w="100%" pos="relative">
                {virtualizer.getVirtualItems().map(({ key, index, start, size }) => (
                  <styled.div
                    key={key}
                    pos="absolute"
                    top={0}
                    left={0}
                    w="full"
                    h={`${size}px`}
                    style={{
                      transform: `translateY(${start}px)`,
                    }}
                  >
                    <Combobox.Item key={`${key}-item`} item={items[index]}>
                      <Combobox.ItemText lineClamp="1">{items[index].label}</Combobox.ItemText>
                      <Combobox.ItemIndicator>
                        <Check />
                      </Combobox.ItemIndicator>
                    </Combobox.Item>
                  </styled.div>
                ))}
              </styled.div>
            </styled.div>
          )}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  );
};
