const config = {
  name: process.env.REACT_APP_PROJECT_NAME || '',
  stage: process.env.REACT_APP_STAGE || '',
  lang: process.env.REACT_APP_LANGUAGE || '',
  theme: process.env.REACT_APP_THEME || '',
  api: process.env.REACT_APP_API || '',
  copyright: {
    company: process.env.REACT_APP_COPYRIGHT_COMPANY || '',
    date: process.env.REACT_APP_COPYRIGHT_DATE || '',
  },
};

export default config;
