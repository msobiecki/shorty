const config = {
  name: process.env.REACT_APP_PROJECT_NAME || 'SHORTY',
  lang: process.env.REACT_APP_LANGUAGE || 'en',
  theme: process.env.REACT_APP_THEME || 'classic',
  api: process.env.REACT_APP_API || 'http://localhost:8000/api',
  copyright: {
    company: process.env.REACT_APP_COPYRIGHT_COMPANY || 'CODESHAKER',
    date: process.env.REACT_APP_COPYRIGHT_DATE || new Date().getFullYear(),
  },
};

export default config;
