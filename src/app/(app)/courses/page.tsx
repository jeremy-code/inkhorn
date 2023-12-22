import React from "react";
import { container, stack } from "styled-system/patterns";

import { Course } from "@/components/course";
import { Input, Label, Prompt, WeekDaySelector } from "@/components/ui";
import { createCourse, getUser } from "@/actions";

const CoursesPage = async () => {
  const user = await getUser();

  return (
    <main className={container()}>
      <Prompt label="Create New Course" title="Create New Course" action={createCourse}>
        <Label>Course Name</Label>
        <Input placeholder="Course Name" type="text" name="name" />

        <WeekDaySelector mt={4} />
      </Prompt>
      <div className={stack({ mt: 4 })}>
        {user?.courses.map((course) => <Course {...course} key={course.id} />)}
      </div>
    </main>
  );
};

export default CoursesPage;
