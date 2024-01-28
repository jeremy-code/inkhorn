"use client";

import { useEffect, useRef } from "react";

/**
 * See {@link https://overreacted.io/making-setinterval-declarative-with-react-hooks/}
 *
 * @param callback - Function to execute at most every `delay` milliseconds
 * @param delay - Milliseconds between calls to `callback`. `null` to disable the interval.
 */
export const useInterval = <T extends () => ReturnType<T>>(
  callback: T,
  delay: number | null
): void => {
  const savedCallback = useRef<T>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }, delay);

    return () => clearInterval(id);
  }, [delay]);
};
