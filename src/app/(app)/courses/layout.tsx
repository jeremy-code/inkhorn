import React, { ReactNode } from "react";
import { Grid } from "styled-system/jsx";

type CoursesLayoutProps = {
  children: ReactNode;
  course: ReactNode;
};

const CoursesLayout = ({ children, course }: CoursesLayoutProps) => {
  return (
    <Grid h="full" w="full" gridTemplateColumns="2fr 3fr">
      {children}
      {course}
    </Grid>
  );
};

export default CoursesLayout;
