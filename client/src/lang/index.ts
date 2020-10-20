import en from "./en";

type LangType = typeof en;

const lang = {
  en,
} as {
  [key: string]: LangType;
};

export default lang;
