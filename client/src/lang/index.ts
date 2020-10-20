import en from "./en";

type LangType = typeof en;

const languages = {
  en,
} as {
  [key: string]: LangType;
};

export default languages;
