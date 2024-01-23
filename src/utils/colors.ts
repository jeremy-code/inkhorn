type RGB = {
  r: number;
  g: number;
  b: number;
};

export function rgbToYIQ({ r, g, b }: RGB): number {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export function hexToRgb(hex: string): RGB {
  const bigint = parseInt(hex.slice(1), 16);

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

export const rgbToHex = ({ r, g, b }: RGB) =>
  `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
