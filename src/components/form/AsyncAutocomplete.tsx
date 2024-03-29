"use client";

import React, { useMemo, useState } from "react";

import { Autocomplete, Item, type AutocompleteProps } from "@/components/form";
import { debounce } from "@/utils/common";

const LOADING_ITEM: Item = { label: "Loading...", value: "", disabled: true };
const NO_RESULTS_ITEM: Item = { label: "No results found", value: "", disabled: true };

type AsyncAutocompleteProps = {
  fetchItems: (value: string) => Promise<Item[]>;
  label: string;
} & Partial<AutocompleteProps>;

export const AsyncAutocomplete = ({ fetchItems, ...rest }: AsyncAutocompleteProps) => {
  const [items, setItems] = useState([LOADING_ITEM]);

  const handleChange = useMemo(
    () =>
      debounce(
        async ({ value }: { value: string }) => {
          setItems([LOADING_ITEM]);
          const items = await fetchItems(value);
          setItems(items.length ? items : [NO_RESULTS_ITEM]);
        },
        50,
        false
      ),
    [fetchItems]
  );

  return (
    <Autocomplete {...rest} items={items} onInputValueChange={handleChange} allowCustomValue />
  );
};
