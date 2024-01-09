import type { Metadata } from "next";

import { Course, CourseForm } from "@/components/course";
import { Prompt } from "@/components/form";
import { Divider, Stack } from "@/lib/styled/jsx";
import { createCourse, getCourses } from "@/actions/course";

export const metadata: Metadata = { title: "courses" };

const CoursesPage = async () => {
  const courses = await getCourses();

  return (
    <Stack h="full" w="full" overflow="hidden auto" p={2}>
      {/* Create Course Prompt */}
      <Prompt label="Create New Course" title="Create New Course" action={createCourse}>
        <CourseForm />
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
