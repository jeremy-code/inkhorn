import Image from "next/image";
import { css } from "styled-system/css";
import { Stack } from "styled-system/jsx";
import { container, grid } from "styled-system/patterns";

import { FormButton } from "@/components/form";
import { Heading } from "@/components/ui";
import { signInAction } from "@/actions/auth";
import { heroImage } from "@/assets";

const Home = async () => {
  return (
    <main className={container()}>
      <div
        className={grid({
          columns: [1, null, 2],
          gap: "5",
          minH: "xl",
          alignContent: "center",
        })}
      >
        <Stack gap="5" justify="center">
          <Heading as="h1" textStyle="5xl" maxW="15ch">
            the next-generation assistant for students
          </Heading>
          <div>
            <FormButton action={signInAction}>Login</FormButton>
          </div>
        </Stack>
        <Image
          src={heroImage}
          height="400"
          alt="hero image"
          priority
          className={css({ mx: "auto", hideBelow: "md" })}
        />
      </div>
    </main>
  );
};

export default Home;
