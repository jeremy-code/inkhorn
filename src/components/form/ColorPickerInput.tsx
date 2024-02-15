"use client";

import { Pipette } from "lucide-react";

import { ColorPicker, IconButton, Input, Text, type InputProps } from "@/components/ui";
import { HStack, Stack } from "@/lib/styled/jsx";
import { token } from "@/lib/styled/tokens";

const BASE_COLORS = ["purple", "pink", "rose", "blue"] as const;
const presets = [token("colors.jade.light.8"), ...BASE_COLORS.map((c) => token(`colors.${c}.500`))];

type ColorPickerInputProps = {
  label: string;
} & InputProps;

export const ColorPickerInput = ({ label, ...rest }: ColorPickerInputProps) => {
  return (
    <ColorPicker.Root defaultValue={presets[0]}>
      {(api) => (
        <>
          <ColorPicker.Label>{label}</ColorPicker.Label>
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
                    {presets.map((color, i) => (
                      <ColorPicker.SwatchTrigger key={i} value={color}>
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
