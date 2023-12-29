"use client";

import { Splitter as ArkSplitter } from "@ark-ui/react/splitter";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { splitter } from "styled-system/recipes";

import { createStyleContext } from "@/lib/styled";

const { withProvider, withContext } = createStyleContext(splitter);

const Root = withProvider(styled(ArkSplitter.Root), "root");
const Panel = withContext(styled(ArkSplitter.Panel), "panel");
const ResizeTrigger = withContext(styled(ArkSplitter.ResizeTrigger), "resizeTrigger");

export { Panel, ResizeTrigger, Root };

export type SplitterProps = HTMLStyledProps<typeof Root>;
export type SplitterPanelProps = HTMLStyledProps<typeof Panel>;
export type SplitterResizeTriggerProps = HTMLStyledProps<typeof ResizeTrigger>;
