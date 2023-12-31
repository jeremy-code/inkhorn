import { AsyncAutocomplete, TimeAutocomplete, WeekDaysSelector } from "@/components/form";
import { Input, Label } from "@/components/ui";
import { fetchSubjects } from "@/actions/subject";
import { HStack, Stack, StackProps } from "@/lib/styled/jsx";

export const CourseForm = (props: StackProps) => {
  const fetchSubjectItems = async (value: string) => {
    "use server";
    return (await fetchSubjects(value)).map(({ name }) => ({ label: name, value: name }));
  };

  return (
    <Stack gap={1} {...props}>
      <Label>Course Name</Label>
      <Input placeholder="Course Name" type="text" name="name" />

      <AsyncAutocomplete
        label="Subject"
        fetchItems={fetchSubjectItems}
        placeholder="Mathematics"
        name="subject"
        mt={2}
      />

      <Label mt={2}>Schedule</Label>
      <WeekDaysSelector />

      <HStack mt={2}>
        <TimeAutocomplete label="From" w="32" name="startTime" />
        <TimeAutocomplete label="To" w="32" name="endTime" />
      </HStack>
    </Stack>
  );
};
