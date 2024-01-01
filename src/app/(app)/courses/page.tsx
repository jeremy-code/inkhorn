import React from "react";
import type { Metadata } from "next";
import { Divider, Stack } from "styled-system/jsx";

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
    <Stack h="full" w="full" overflow="hidden auto" p={2}>
      {/* Create Course Prompt */}
      <Prompt label="Create New Course" title="Create New Course" action={createCourse}>
        <Label>Course Name</Label>
        <Input placeholder="Course Name" type="text" name="name" />
        <WeekDaysSelector mt={4} />
      </Prompt>
      <Divider my={2} />
      {/* List of Courses */}
      {courses.map((course) => (
        <Course {...course} key={course.id} />
      ))}
    </Stack>
  );
};

export default CoursesPage;
