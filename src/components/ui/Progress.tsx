import { forwardRef, type ReactNode } from "react";
import {
  Progress as ArkProgress,
  type ProgressRootProps as ArkProgressProps,
} from "@ark-ui/react/progress";

import { css, cx } from "@/lib/styled/css";
import { splitCssProps } from "@/lib/styled/jsx";
import { progress, type ProgressVariantProps } from "@/lib/styled/recipes";
import type { Assign, JsxStyleProps } from "@/lib/styled/types";

export interface ProgressProps
  extends Assign<JsxStyleProps, ArkProgressProps>,
    ProgressVariantProps {
  children?: ReactNode;
  /**
   * The type of progress to render.
   * @defaultValue linear
   */
  type?: "linear" | "circular";
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const [variantProps, progressProps] = progress.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(progressProps);
  const { children, className, type = "linear", ...rootProps } = localProps;
  const styles = progress(variantProps);

  return (
    <ArkProgress.Root
      ref={ref}
      className={cx(styles.root, css(cssProps), className)}
      {...rootProps}
    >
      {children && <ArkProgress.Label className={styles.label}>{children}</ArkProgress.Label>}
      {type === "linear" && (
        <ArkProgress.Track className={styles.track}>
          <ArkProgress.Range className={styles.range} />
        </ArkProgress.Track>
      )}
      {type === "circular" && (
        <ArkProgress.Circle className={styles.circle}>
          <ArkProgress.CircleTrack className={styles.circleTrack} />
          <ArkProgress.CircleRange className={styles.circleRange} />
          <ArkProgress.ValueText className={styles.valueText} />
        </ArkProgress.Circle>
      )}
      <ArkProgress.ValueText className={styles.valueText} />
    </ArkProgress.Root>
  );
});

Progress.displayName = "Progress";
