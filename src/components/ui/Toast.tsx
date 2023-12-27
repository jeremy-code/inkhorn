"use client";

import { Toast as ArkToast, createToaster } from "@ark-ui/react/toast";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { styled } from "styled-system/jsx";
import { toast as toastRecipe } from "styled-system/recipes";

import { IconButton } from "@/components/ui";
import { createStyleContext } from "@/lib/styled";

const { withProvider, withContext } = createStyleContext(toastRecipe);

const Root = withProvider(styled(ArkToast.Root), "root");
const CloseTrigger = withContext(styled(ArkToast.CloseTrigger), "closeTrigger");
const Description = withContext(styled(ArkToast.Description), "description");
const Title = withContext(styled(ArkToast.Title), "title");

const [Toaster, toast] = createToaster({
  placement: "top-end",
  render(toast) {
    return (
      <Root>
        <Title>{toast.title}</Title>
        <Description>{toast.description}</Description>
        <CloseTrigger asChild>
          <IconButton size="sm" variant="link">
            <XMarkIcon />
          </IconButton>
        </CloseTrigger>
      </Root>
    );
  },
});

export { Toaster, toast };
