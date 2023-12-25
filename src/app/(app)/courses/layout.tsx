import React, { ReactNode } from "react";
import { grid } from "styled-system/patterns";

type CoursesLayoutProps = {
  children: ReactNode;
  course: ReactNode;
};

const CoursesLayout = ({ children, course }: CoursesLayoutProps) => {
  return (
    <div className={grid({ columns: 2, h: "full", w: "full" })}>
      {children}
      {course}
    </div>
  );
};

export default CoursesLayout;
