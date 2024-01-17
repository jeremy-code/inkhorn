"use client";

import React, { type ReactNode } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

import { Splitter } from "@/components/ui";

const CoursesLayout = ({ children, course }: { children: ReactNode; course: ReactNode }) => {
  // layoutSegment is only defined when the route is /courses/[id] (excluding intercepting routes)
  // necessary because otherwise Splitter.ResizeTrigger will be rendered on every page
  if (useSelectedLayoutSegment()) return <>{children}</>;

  // Setting overflow to visible! since Splitter components are overflow: hidden by default
  // It also fixes the resizing not adhering the min/max size of its children
  return (
    <Splitter.Root
      defaultSize={[
        {
          id: "courses",
          size: 40,
        },
        {
          id: "course",
          size: 60,
        },
      ]}
      overflow="visible!"
    >
      <Splitter.Panel id="courses" overflow="visible!" borderRight="muted!" border="none">
        {children}
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="courses:course" />
      <Splitter.Panel id="course" overflow="visible!" borderLeft="muted!" border="none">
        {course}
      </Splitter.Panel>
    </Splitter.Root>
  );
};

export default CoursesLayout;
