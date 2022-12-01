export type UserId = string;
export type User = {
  id: UserId;
  name: string;
  image?: string;
  color?: string;
};

export const getRandomPastelColor = () => {
  const h = 360 * Math.random();
  const s = 25 + 70 * Math.random();
  const l = 85 + 10 * Math.random();

  return hslToHex(h, s, l);
};

const hslToHex = (h: number, s: number, l: number) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const transformer = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    // convert to Hex and prefix "0" if needed
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${transformer(0)}${transformer(8)}${transformer(4)}`;
};
