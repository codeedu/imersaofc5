import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f9cc29",
    },
    secondary: {
      main: "#282b32",
    },
    mode: "dark",
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
    },
  },
});

export default theme;
