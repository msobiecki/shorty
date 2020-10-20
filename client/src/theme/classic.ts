import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const classic = responsiveFontSizes(
  createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            height: "100%",
          },
          body: {
            height: "100%",
          },
          "#root": {
            height: "100%",
          },
        },
      },
    },
  })
);

export default classic;
