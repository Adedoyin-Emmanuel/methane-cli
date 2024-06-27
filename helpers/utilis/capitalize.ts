const capitalize = (word: string) => {
  if (!word) return "";

  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const capititalizeWord = (word: string): string => {
  if (!word) return "";

  return word.split("-").map(capitalize).join("");
};
