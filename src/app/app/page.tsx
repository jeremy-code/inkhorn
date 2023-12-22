import React from "react";
import { container, stack } from "styled-system/patterns";

import { Course } from "@/components/course";
import { Protected } from "@/components/misc";
import { Input, Label, Navbar, Prompt, WeekDaySelector } from "@/components/ui";
import { createCourse, getUser } from "@/actions";

const AppPage = async () => {
  const user = await getUser();

  console.log(user);

  return (
    <Protected>
      <Navbar />
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
    </Protected>
  );
};

export default AppPage;
