"use client";

import React, { type ComponentProps } from "react";
import { Pipette } from "lucide-react";

import { ColorPicker, IconButton, Input, Label, Text } from "@/components/ui";
import { HStack, Stack } from "@/lib/styled/jsx";

const presets = [
  "hsl(10, 81%, 59%)",
  "hsl(60, 81%, 59%)",
  "hsl(100, 81%, 59%)",
  "hsl(175, 81%, 59%)",
  "hsl(190, 81%, 59%)",
  "hsl(205, 81%, 59%)",
  "hsl(220, 81%, 59%)",
  "hsl(250, 81%, 59%)",
  "hsl(280, 81%, 59%)",
  "hsl(350, 81%, 59%)",
];

type ColorPickerInputProps = {
  label: string;
} & ComponentProps<typeof Input>;

export const ColorPickerInput = ({ label, ...rest }: ColorPickerInputProps) => {
  return (
    <ColorPicker.Root>
      {(api) => (
        <>
          <ColorPicker.Label asChild>
            {/* Since ColorPicker.Label has its own styles, overwrite to match with other labels */}
            <Label color="fg.muted" fontSize="md" fontWeight="normal">
              {label}
            </Label>
          </ColorPicker.Label>
          <ColorPicker.Control>
            <ColorPicker.ChannelInput channel="hex" asChild>
              <Input {...rest} />
            </ColorPicker.ChannelInput>
            <ColorPicker.Trigger asChild>
              <IconButton variant="outline">
                <ColorPicker.Swatch value={api.value} />
              </IconButton>
            </ColorPicker.Trigger>
          </ColorPicker.Control>
          <ColorPicker.Positioner>
            <ColorPicker.Content>
              <Stack gap="3">
                <ColorPicker.Area>
                  <ColorPicker.AreaBackground />
                  <ColorPicker.AreaThumb />
                </ColorPicker.Area>
                <HStack gap="3">
                  <ColorPicker.EyeDropperTrigger asChild>
                    <IconButton size="xs" variant="outline" aria-label="Pick a color">
                      <Pipette />
                    </IconButton>
                  </ColorPicker.EyeDropperTrigger>
                  <Stack gap="2" flex="1">
                    <ColorPicker.ChannelSlider channel="hue">
                      <ColorPicker.ChannelSliderTrack />
                      <ColorPicker.ChannelSliderThumb />
                    </ColorPicker.ChannelSlider>
                  </Stack>
                </HStack>
                <HStack>
                  <ColorPicker.ChannelInput channel="hex" asChild>
                    <Input size="2xs" />
                  </ColorPicker.ChannelInput>
                </HStack>
                <Stack gap="1.5">
                  <Text textStyle="xs" fontWeight="medium" color="fg.default">
                    Saved Colors
                  </Text>
                  <ColorPicker.SwatchGroup>
                    {presets.map((color, id) => (
                      <ColorPicker.SwatchTrigger key={id} value={color}>
                        <ColorPicker.Swatch value={color} />
                      </ColorPicker.SwatchTrigger>
                    ))}
                  </ColorPicker.SwatchGroup>
                </Stack>
              </Stack>
            </ColorPicker.Content>
          </ColorPicker.Positioner>
        </>
      )}
    </ColorPicker.Root>
  );
};
