import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const classic = responsiveFontSizes(
  createTheme({
    palette: {
      type: 'light',
      background: {
        default: '#fff',
        paper: '#eee',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            height: '100%',
          },
          body: {
            height: '100%',
          },
          '#root': {
            height: '100%',
          },
        },
      },
    },
  })
);

export default classic;
