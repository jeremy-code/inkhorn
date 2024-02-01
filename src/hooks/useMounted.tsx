"use client";

import { useEffect, useState } from "react";

export const useMounted = (initialValue = false) => {
  const [mounted, setMounted] = useState(initialValue);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};
