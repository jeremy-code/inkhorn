import React from "react";
import { Divider, Stack, styled } from "styled-system/jsx";

import { Course } from "@/components/course";
import { Prompt, WeekDaysSelector } from "@/components/form";
import { Input, Label } from "@/components/ui";
import { createCourse, getUser } from "@/actions";

const CoursesPage = async () => {
  const user = await getUser();

  return (
    <styled.div overflowY="scroll" pt={4} px={2}>
      {/* Create Course Prompt */}
      <Prompt label="Create New Course" title="Create New Course" action={createCourse}>
        <Label>Course Name</Label>
        <Input placeholder="Course Name" type="text" name="name" />
        <WeekDaysSelector mt={4} />
      </Prompt>

      {/* List of Courses */}
      <Stack mt={4} align="center">
        {user?.courses.map((c) => <Course {...c} key={c.id} />)}
      </Stack>
    </styled.div>
  );
};

export default CoursesPage;
