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
  daysOfTheWeek: string[] | null;
  userId: string;
};
