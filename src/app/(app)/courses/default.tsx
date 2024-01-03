import { redirect } from "next/navigation";

// Bug with Next.js and revalidating pages, app/course/default.tsx will be rendered after revalidating
// on intercepted route. See more info here: https://github.com/vercel/next.js/issues/54173
const Default = () => {
  redirect("/courses");
};

export default Default;
