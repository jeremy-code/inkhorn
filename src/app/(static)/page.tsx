import Image from "next/image";
import { css } from "styled-system/css";
import { Grid, Stack, styled } from "styled-system/jsx";
import { container } from "styled-system/patterns";

import { FormButton } from "@/components/form";
import { Heading, Text } from "@/components/ui";
import { signInAction } from "@/actions/auth";
import { heroImage } from "@/assets";

const Home = async () => {
  return (
    <main className={container({ h: "full", w: "full" })}>
      <Grid h="full" columns={[1, null, 2]} alignContent="center">
        <Stack gap="2" justify="center">
          <Heading as="h1" textStyle={["4xl", "5xl"]} maxW="15ch">
            {"the next-generation assistant for "}
            <Text as="span" bgGradient="textHighlight" bgClip="text" color="transparent">
              students
            </Text>
          </Heading>
          <Text textStyle={["lg", "xl"]} maxW="35ch">
            inkhorn is a free and open-source note-taking and scheduling tool for your classes
          </Text>
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
        filter="auto"
        blur="3xl"
      >
        <styled.div
          pos="relative"
          aspectRatio="wide"
          w={["full", "2xl", "6xl"]}
          bgGradient="hero"
          opacity="0.2"
          clipPath="polygon(74% 44%, 100% 62%, 98% 27%, 86% 0%, 81% 2%, 73% 33%, 60% 62%, 52% 68%, 48% 58%, 45% 35%, 28% 77%, 0% 65%, 18% 100%, 28% 77%, 76% 98%, 74% 44%)"
        />
      </styled.div>
    </main>
  );
};

export default Home;
