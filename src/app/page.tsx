import Image from "next/image";
import { css } from "styled-system/css";
import { container, grid, stack } from "styled-system/patterns";

import { FormButton, Heading, Navbar } from "@/components/ui";
import heroImage from "@/assets/hero-image.svg";
import { signInAction } from "@/lib/auth";

const Home = async () => {
  return (
    <>
      <Navbar />
      <main className={container()}>
        <div
          className={grid({
            columns: [1, null, 2],
            gap: "5",
            minH: "xl",
            alignContent: "center",
          })}
        >
          <div className={stack({ gap: 5, justifyContent: "center" })}>
            <Heading as="h1" textStyle="5xl" maxW="15ch">
              the next-generation assistant for students
            </Heading>
            <div>
              <FormButton action={signInAction}>Login</FormButton>
            </div>
          </div>
          <Image
            src={heroImage}
            height="400"
            alt="hey"
            priority
            className={css({ display: ["none", null, "block"], mx: "auto" })}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
