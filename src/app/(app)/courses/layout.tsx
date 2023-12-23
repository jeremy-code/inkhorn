import React, { ReactNode } from "react";
import { grid } from "styled-system/patterns";

type CoursesLayoutProps = {
  children: ReactNode;
  course: ReactNode;
};

const CoursesLayout = ({ children, course }: CoursesLayoutProps) => {
  return (
    <main
      className={grid({
        columns: 2,
        flexGrow: 1,
        py: 8,
        maxW: "60rem",
        mx: "auto",
      })}
    >
      {children}
      {course}
    </main>
  );
};

export default CoursesLayout;
