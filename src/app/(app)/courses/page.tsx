import type { Metadata } from "next";

import { Course, CourseForm } from "@/components/course";
import { Prompt } from "@/components/form";
import { Heading } from "@/components/ui";
import { Flex, HStack } from "@/lib/styled/jsx";
import { createCourse, getCourses } from "@/actions/course";

export const metadata: Metadata = { title: "courses" };

const CoursesPage = async () => {
  const courses = await getCourses();

  return (
    <Flex w="full" h="full" flexDir="column">
      <HStack h="16" p="4" borderBottom="muted" justify="space-between">
        <Heading fontWeight="normal">Courses</Heading>
        <Prompt title="Create New Course" action={createCourse}>
          <CourseForm />
        </Prompt>
      </HStack>

      <Flex
        flexDir="column"
        overflowY="auto"
        // add gutter on both sides to prevent layout shift
        scrollbarGutter="stable both-edges"
        scrollbarWidth="thin"
        py="3"
      >
        {courses.map((course) => (
          <Course {...course} key={course.id} />
        ))}
      </Flex>
    </Flex>
  );
};

export default CoursesPage;
