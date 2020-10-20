import classic from "./classic";

type ThemeType = typeof classic;

const theme = {
  classic,
} as {
  [key: string]: ThemeType;
};

export default theme;
