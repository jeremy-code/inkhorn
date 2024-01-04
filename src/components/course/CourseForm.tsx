import { Stack } from "styled-system/jsx";

import { WeekDaysSelector } from "@/components/form";
import { Input, Label } from "@/components/ui";

export const CourseForm = () => {
  return (
    <Stack gap={1}>
      <Label>Course Name</Label>
      <Input placeholder="Course Name" type="text" name="name" />

      <Label mt={2}>Schedule</Label>
      <WeekDaysSelector />
    </Stack>
  );
};
