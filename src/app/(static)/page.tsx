import Image from "next/image";
import { css } from "styled-system/css";
import { Grid, Stack, styled } from "styled-system/jsx";
import { container } from "styled-system/patterns";

import { FormButton } from "@/components/form";
import { Heading } from "@/components/ui";
import { signInAction } from "@/actions/auth";
import { heroImage } from "@/assets";

const Home = async () => {
  return (
    <main className={container({ h: "full", w: "full" })}>
      <Grid h="full" columns={[1, null, 2]} alignContent="center">
        <Stack gap="2" justify="center">
          <Heading as="h1" textStyle={["4xl", "5xl"]} maxW="15ch">
            the next-generation assistant for students
          </Heading>
          <styled.p textStyle={["lg", "xl"]} maxW="35ch">
            inkhorn is a free and open-source note-taking and scheduling tool for your classes
          </styled.p>
          <Stack flexDir="row" mt={8}>
            <FormButton action={signInAction} size="lg" colorPalette="primary">
              Get Started
            </FormButton>
            <FormButton action={signInAction} variant="ghost" size="lg">
              Login
            </FormButton>
          </Stack>
        </Stack>
        <Image
          src={heroImage}
          height="400"
          alt="hero image"
          priority
          className={css({ mx: "auto", hideBelow: "md" })}
        />
      </Grid>
      {/* Gradient underneath hero */}
      <styled.div
        pos="absolute"
        top="-80"
        zIndex="hide"
        overflow="hidden"
        aria-hidden="true"
        filter="blur(token(blurs.3xl))"
      >
        <styled.div
          pos="relative"
          aspectRatio="wide"
          w={["full", "2xl", "6xl"]}
          bgGradient="hero"
          opacity="0.2"
          clipPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </styled.div>
    </main>
  );
};

export default Home;
