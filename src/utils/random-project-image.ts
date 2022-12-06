export const getRandomProjectImage = (): string => {
  const randomNumber = getRandomNumberBetweenRange(0, 26);
  const formattedNumber = randomNumber.toString().padStart(2, "0");
  return `https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/104${formattedNumber}?size=xxlarge`;
};

const getRandomNumberBetweenRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
