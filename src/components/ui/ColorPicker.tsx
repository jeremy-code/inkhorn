"use client";

import type { ComponentProps } from "react";
import { ColorPicker as ArkColorPicker } from "@ark-ui/react/color-picker";

import { createStyleContext } from "@/lib/styled";
import { styled } from "@/lib/styled/jsx";
import { colorPicker } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(colorPicker);

const Root = withProvider(styled(ArkColorPicker.Root), "root");
const Area = withContext(styled(ArkColorPicker.Area), "area");
const AreaBackground = withContext(styled(ArkColorPicker.AreaBackground), "areaBackground");
const AreaThumb = withContext(styled(ArkColorPicker.AreaThumb), "areaThumb");
const ChannelInput = withContext(styled(ArkColorPicker.ChannelInput), "channelInput");
const ChannelSlider = withContext(styled(ArkColorPicker.ChannelSlider), "channelSlider");
const ChannelSliderThumb = withContext(
  styled(ArkColorPicker.ChannelSliderThumb),
  "channelSliderThumb"
);
const ChannelSliderTrack = withContext(
  styled(ArkColorPicker.ChannelSliderTrack),
  "channelSliderTrack"
);
const Content = withContext(styled(ArkColorPicker.Content), "content");
const Control = withContext(styled(ArkColorPicker.Control), "control");
const EyeDropperTrigger = withContext(
  styled(ArkColorPicker.EyeDropperTrigger),
  "eyeDropperTrigger"
);
const FormatSelect = withContext(styled(ArkColorPicker.FormatSelect), "formatSelect");
const FormatTrigger = withContext(styled(ArkColorPicker.FormatTrigger), "formatTrigger");
const Label = withContext(styled(ArkColorPicker.Label), "label");
const Positioner = withContext(styled(ArkColorPicker.Positioner), "positioner");
const Swatch = withContext(styled(ArkColorPicker.Swatch), "swatch");
const SwatchGroup = withContext(styled(ArkColorPicker.SwatchGroup), "swatchGroup");
const SwatchIndicator = withContext(styled(ArkColorPicker.SwatchIndicator), "swatchIndicator");
const SwatchTrigger = withContext(styled(ArkColorPicker.SwatchTrigger), "swatchTrigger");
const TransparencyGrid = withContext(styled(ArkColorPicker.TransparencyGrid), "transparencyGrid");
const Trigger = withContext(styled(ArkColorPicker.Trigger), "trigger");
const ValueText = withContext(styled(ArkColorPicker.ValueText), "valueText");
const View = withContext(styled(ArkColorPicker.View), "view");

export {
  Area,
  AreaBackground,
  AreaThumb,
  ChannelInput,
  ChannelSlider,
  ChannelSliderThumb,
  ChannelSliderTrack,
  Content,
  Control,
  EyeDropperTrigger,
  FormatSelect,
  FormatTrigger,
  Label,
  Positioner,
  Root,
  Swatch,
  SwatchGroup,
  SwatchIndicator,
  SwatchTrigger,
  TransparencyGrid,
  Trigger,
  ValueText,
  View,
};

export type ColorPickerProps = ComponentProps<typeof Root>;
export type ColorPickerAreaProps = ComponentProps<typeof Area>;
export type ColorPickerAreaBackgroundProps = ComponentProps<typeof AreaBackground>;
export type ColorPickerAreaThumbProps = ComponentProps<typeof AreaThumb>;
export type ColorPickerChannelInputProps = ComponentProps<typeof ChannelInput>;
export type ColorPickerChannelSliderProps = ComponentProps<typeof ChannelSlider>;
export type ColorPickerChannelSliderThumbProps = ComponentProps<typeof ChannelSliderThumb>;
export type ColorPickerChannelSliderTrackProps = ComponentProps<typeof ChannelSliderTrack>;
export type ColorPickerContentProps = ComponentProps<typeof Content>;
export type ColorPickerControlProps = ComponentProps<typeof Control>;
export type ColorPickerEyeDropperTriggerProps = ComponentProps<typeof EyeDropperTrigger>;
export type ColorPickerFormatSelectProps = ComponentProps<typeof FormatSelect>;
export type ColorPickerFormatTriggerProps = ComponentProps<typeof FormatTrigger>;
export type ColorPickerLabelProps = ComponentProps<typeof Label>;
export type ColorPickerPositionerProps = ComponentProps<typeof Positioner>;
export type ColorPickerSwatchProps = ComponentProps<typeof Swatch>;
export type ColorPickerSwatchGroupProps = ComponentProps<typeof SwatchGroup>;
export type ColorPickerSwatchIndicatorProps = ComponentProps<typeof SwatchIndicator>;
export type ColorPickerSwatchTriggerProps = ComponentProps<typeof SwatchTrigger>;
export type ColorPickerTransparencyGridProps = ComponentProps<typeof TransparencyGrid>;
export type ColorPickerTriggerProps = ComponentProps<typeof Trigger>;
export type ColorPickerValueTextProps = ComponentProps<typeof ValueText>;
export type ColorPickerViewProps = ComponentProps<typeof View>;
