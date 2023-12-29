import React from "react";
import type { Metadata } from "next";
import { Stack, styled } from "styled-system/jsx";

import { Course } from "@/components/course";
import { Prompt, WeekDaysSelector } from "@/components/form";
import { Input, Label } from "@/components/ui";
import { createCourse, getCourses } from "@/actions";

export const metadata: Metadata = {
  title: "courses | inkhorn",
};

const CoursesPage = async () => {
  const courses = await getCourses();

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
        {courses.map((c) => (
          <Course {...c} key={c.id} />
        ))}
      </Stack>
    </styled.div>
  );
};

export default CoursesPage;
