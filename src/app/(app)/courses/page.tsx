import type { Metadata } from "next";

import { Course, CourseForm } from "@/components/course";
import { Prompt } from "@/components/form";
import { Page } from "@/components/layout";
import { Heading } from "@/components/ui";
import { Flex } from "@/lib/styled/jsx";
import { createCourse, getCourses } from "@/actions/course";

export const metadata: Metadata = { title: "courses" };

const CoursesPage = async () => {
  const courses = await getCourses();

  return (
    <Page>
      <Page.Header>
        <Heading fontWeight="normal">Courses</Heading>
        <Prompt title="Create New Course" action={createCourse}>
          <CourseForm />
        </Prompt>
      </Page.Header>
      <Flex flexDir="column" overflowY="auto" p="3">
        {courses.map((course) => (
          <Course {...course} key={course.id} />
        ))}
      </Flex>
    </Page>
  );
};

export default CoursesPage;
