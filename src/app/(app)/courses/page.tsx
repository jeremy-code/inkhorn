import React from "react";
import { Stack, styled } from "styled-system/jsx";

import { Course } from "@/components/course";
import { Prompt, WeekDaysSelector } from "@/components/form";
import { Input, Label } from "@/components/ui";
import { createCourse, getUser } from "@/actions";

const CoursesPage = async () => {
  const user = await getUser();

  return (
    <styled.div overflowY="scroll" pt={4}>
      <Prompt label="Create New Course" title="Create New Course" action={createCourse}>
        <Label>Course Name</Label>
        <Input placeholder="Course Name" type="text" name="name" />

        <WeekDaysSelector mt={4} />
      </Prompt>

      <Stack mt={4} align="center">
        {user?.courses.map((course) => <Course {...course} key={course.id} />)}
      </Stack>
    </styled.div>
  );
};

export default CoursesPage;
