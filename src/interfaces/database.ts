export type User = {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
};

export type Course = {
  id: string;
  name: string;
  daysOfTheWeek: DayOfTheWeek[] | null | undefined;
  userId: string;
};

type DayOfTheWeek = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
