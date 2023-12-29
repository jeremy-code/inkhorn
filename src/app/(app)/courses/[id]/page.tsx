import { db } from "@/lib";

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const course = await db.query.courses.findFirst({
    where: (c, { eq }) => eq(c.id, params.id),
  });

  return <div>CoursePage 2{JSON.stringify(course)}</div>;
};

export default CoursePage;
