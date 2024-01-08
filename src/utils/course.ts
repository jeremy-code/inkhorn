import { convertToTimeObject, parseFormData } from "./common";
import { DAY_PREFIX } from "./constants";

/**
 * Given a FormData object, parse it into a course object (with each key and
 * value pairs as an object of [k: string]: string, and all the days of the
 * week as an array)
 */
export const parseCourse = (formData: FormData): any => {
  const course = parseFormData(formData);

  // Get all the days of the week that are checked
  // a bit complicated because using checkboxes with name "day-of-the-week-day"
  const daysOfTheWeek = Object.keys(course)
    .filter((key) => key.startsWith(DAY_PREFIX) && course[key] === "on")
    .map((key) => key.slice(DAY_PREFIX.length + 1));

  return {
    ...course,
    daysOfTheWeek,
    startTime: convertToTimeObject(course.startTime),
    endTime: convertToTimeObject(course.endTime),
  };
};
