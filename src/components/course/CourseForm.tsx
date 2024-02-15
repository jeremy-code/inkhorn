import { AsyncAutocomplete, ColorPickerInput, TimeField, WeekDaysInput } from "@/components/form";
import { FormLabel, Input } from "@/components/ui";
import { HStack, Stack, type StackProps } from "@/lib/styled/jsx";
import { fetchSubjects } from "@/actions/subject";

export const CourseForm = (props: StackProps) => {
  const fetchSubjectItems = async (value: string) => {
    "use server";
    return (await fetchSubjects(value)).map(({ name }) => ({ label: name, value: name }));
  };

  return (
    <Stack gap={5} {...props}>
      <Stack gap="1.5">
        <FormLabel>Course Name</FormLabel>
        <Input placeholder="Course Name" type="text" name="name" />
      </Stack>

      <AsyncAutocomplete
        label="Subject"
        fetchItems={fetchSubjectItems}
        placeholder="Mathematics"
        name="subject"
      />

      <WeekDaysInput label="Schedule" />

      <HStack>
        <TimeField options={{ label: "From" }} w="fit-content" name="startTime" />
        <TimeField options={{ label: "To" }} w="fit-content" name="endTime" />
      </HStack>

      <ColorPickerInput name="color" label="Color" />
    </Stack>
  );
};
