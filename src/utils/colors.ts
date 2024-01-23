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
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

export const rgbToHex = ({ r, g, b }: RGB) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
