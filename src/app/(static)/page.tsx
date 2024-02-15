import Image from "next/image";

import { FormButton } from "@/components/form";
import { Heading, Text } from "@/components/ui";
import { css, cx } from "@/lib/styled/css";
import { Grid, HStack, Stack } from "@/lib/styled/jsx";
import { container, flex } from "@/lib/styled/patterns";
import { signInAction } from "@/actions/auth";
import { heroImage } from "@/assets";

const Home = () => {
  return (
    <main className={cx(container(), flex({ flexDir: "row", align: "center" }))}>
      {/* Hero */}
      <Grid columns={[1, null, 2]}>
        <Stack gap="8" justify="center">
          <Stack>
            {/* Headline */}
            <Heading textStyle="5xl" textWrap="balance">
              {"the next-generation assistant for "}
              <Text as="span" textGradient="to-r" gradientFrom="accent.8" gradientTo="accent.10">
                students
              </Text>
            </Heading>
            {/* Subtitle */}
            <Text color="fg.subtle" textStyle="xl" textWrap="balance">
              inkhorn is a free and open-source note-taking and scheduling tool for your classes
            </Text>
          </Stack>

          {/* CTA */}
          <HStack>
            <FormButton action={signInAction} size="lg">
              Get Started
            </FormButton>
            <FormButton action={signInAction} variant="ghost" size="lg">
              Login
            </FormButton>
          </HStack>
        </Stack>

        {/* Hero Image */}
        <Image
          src={heroImage}
          height="400"
          alt="Inkhorn Hero Image"
          className={css({ mx: "auto", w: "auto", hideBelow: "md" })}
          priority
        />
      </Grid>
    </main>
  );
};

export default Home;
