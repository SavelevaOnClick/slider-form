export const capitalize = (str: string): string =>
  str.slice(0, 1).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();