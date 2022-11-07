export const textAreOnlySpaces = (text: string): boolean => {
  return /^( )\1*$/.test(text);
};
