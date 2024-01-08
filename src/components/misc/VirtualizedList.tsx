"use client";

import React, { useRef, type CSSProperties, type ReactNode } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { styled } from "styled-system/jsx";

type VirtualizedListProps = {
  listItems: (key: number | string, index: number, start: number, size: number) => ReactNode;
} & Omit<Parameters<typeof useVirtualizer>[0], "getScrollElement" | "getItemKey">;

export const VirtualizedList = ({ listItems, ...rest }: VirtualizedListProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { getTotalSize, getVirtualItems } = useVirtualizer({
    getScrollElement: () => ref.current,
    getItemKey: (index) => `list-item-${index}`,
    ...rest,
  });

  return (
    <styled.div ref={ref} h="xs" overflow="auto">
      <styled.div h={`${getTotalSize()}px`} w="full" pos="relative">
        {getVirtualItems().map(({ key, index, start, size }) => (
          <styled.div
            key={key}
            pos="absolute"
            inset="0"
            h={`${size}px`}
            transform="translateY(var(--y))"
            // Panda CSS won't know the the number of pixels during runtime, so we need to use CSS variables
            style={{ "--y": `${start}px` } as CSSProperties}
          >
            {listItems(key, index, start, size)}
          </styled.div>
        ))}
      </styled.div>
    </styled.div>
  );
};
