"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the mounted state of a component. True if mounted. Useful when you want to
 * perform some actions only after the component has been mounted to avoid hydration
 * errors.
 *
 * @param initialValue - Initial value for the mounted state, defaults to `false`.
 * @returns The current mounted state of the component.
 */
export const useMounted = (initialValue = false) => {
  const [mounted, setMounted] = useState(initialValue);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};
