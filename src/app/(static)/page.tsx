import Image from "next/image";

import { FormButton } from "@/components/form";
import { Heading, Text } from "@/components/ui";
import { css } from "@/lib/styled/css";
import { Grid, Stack } from "@/lib/styled/jsx";
import { container } from "@/lib/styled/patterns";
import { signInAction } from "@/actions/auth";
import { heroImage } from "@/assets";

const Home = async () => {
  return (
    <main className={container({ h: "full", w: "full" })}>
      <Grid h="full" columns={[1, null, 2]} alignContent="center">
        <Stack gap="2" justify="center">
          <Heading as="h1" textStyle={["4xl", "5xl"]} maxW="15ch">
            {"the next-generation assistant for "}
            <Text as="span" textGradient="to-r" gradientFrom="primary.6" gradientTo="primary.8">
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
          className={css({ mx: "auto", w: "auto", hideBelow: "md" })}
        />
      </Grid>
    </main>
  );
};

export default Home;
