import {
  AsyncAutocomplete,
  ColorPickerInput,
  TimeField,
  WeekDaysSelector,
} from "@/components/form";
import { Input, Label } from "@/components/ui";
import { Box, HStack, Stack, type StackProps } from "@/lib/styled/jsx";
import { fetchSubjects } from "@/actions/subject";

export const CourseForm = (props: StackProps) => {
  const fetchSubjectItems = async (value: string) => {
    "use server";
    return (await fetchSubjects(value)).map(({ name }) => ({ label: name, value: name }));
  };

  return (
    <Stack gap={4} {...props}>
      <Box>
        <Label>Course Name</Label>
        <Input placeholder="Course Name" type="text" name="name" />
      </Box>

      <AsyncAutocomplete
        label="Subject"
        fetchItems={fetchSubjectItems}
        placeholder="Mathematics"
        name="subject"
      />

      <Box>
        <Label mt={2}>Schedule</Label>
        <WeekDaysSelector />
      </Box>

      <HStack>
        <TimeField options={{ label: "From" }} w="fit-content" name="startTime" />
        <TimeField options={{ label: "To" }} w="fit-content" name="endTime" />
      </HStack>

      <ColorPickerInput name="color" label="Color" />
    </Stack>
  );
};
