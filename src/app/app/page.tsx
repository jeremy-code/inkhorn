import React from "react";
import { container } from "styled-system/patterns";

import { Protected } from "@/components/misc";
import { Button, Input, Label, Navbar, Prompt } from "@/components/ui";
import { createCourse, getUser } from "@/actions";

const AppPage = async () => {
  const user = await getUser();

  return (
    <Protected>
      <Navbar />
      <main className={container()}>
        <Prompt label="Create New Course" title="Create New Course" action={createCourse}>
          <Label>Course Name</Label>
          <Input placeholder="Course Name" name="name" />
        </Prompt>
      </main>
    </Protected>
  );
};

export default AppPage;
