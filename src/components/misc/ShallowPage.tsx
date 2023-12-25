"use client";

import React, { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Updates the URL to remove the last path segment, but does not re-render the page.
 * Useful for intercepting routes but keeps the URL look the same
 */
const ShallowPage = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  // Remove the last path segment (e.g. /foo/bar -> /foo)
  const newPath = path.substring(0, path.lastIndexOf("/"));
  const router = useRouter();

  useEffect(() => {
    if (path !== newPath) {
      router.replace(newPath, {
        scroll: false,
      });
    }
  }, [newPath, path, router]);

  return <>{children}</>;
};

export default ShallowPage;
