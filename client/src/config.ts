const config = {
  name: process.env.REACT_APP_PROJECT_NAME,
  lang: process.env.REACT_APP_LANGUAGE || "en",
  theme: process.env.REACT_APP_THEME || "classic",
  api: process.env.REACT_APP_API || "",
  copyright: {
    company: process.env.REACT_APP_COPYRIGHT_COMPANY,
    date: process.env.REACT_APP_COPYRIGHT_DATE,
  },
};

export default config;
