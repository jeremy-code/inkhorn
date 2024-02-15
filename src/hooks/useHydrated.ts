"use client";

import { useSyncExternalStore } from "react";

/**
 * Tracks the mounted state of a component. True if mounted. Useful when you want to
 * perform some actions only after the component has been mounted to avoid hydration
 * errors.
 *
 * @returns The current mounted state of the component.
 */
export const useHydrated = () => {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
};
