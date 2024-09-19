import { alpha } from "@mui/system";

const Theme = () => {
  const contrastText = "#fff";

  return {
    primary: {
      lightest: alpha("#605BFF", 0.1),
      lighter: alpha("#605BFF", 0.2),
      light: alpha("#605BFF", 0.5),
      main: "#605BFF",
      contrastText,
    },
    secondary: {
      lightest: alpha("#fff", 0.5),
      100: "#f6f6f6",
      lighter: "#f1f1f1",
      200: "#fafafb",
      300: "#DDD",
      400: "#938f99",
      light: "#938f99",
      500: "#938f99",
      main: "#000",
      600: "#757575",
      700: "#757575",
      dark: "#373946",
      800: "#000000",
      900: "#79747e",
      darker: alpha("#000", 0.1),
      darkest: alpha("#000", 0.5),
      contrastText,
    },

    neutral: {
      50: "#FFFFFF",
      100: "#F6F6F6",
      200: "#FAFAFB",
      300: "#000000",
      400: "#938F99",
      500: "#79747E",
      600: "#757575",
      700: "#373946",
      800: "#000000",
      900: "#000000",
      contrastText,
    },
    green: {
      lighter: alpha("#6BD096", 0.2),
      light: "#C5E866",
      main: "#6BD096",
      contrastText,
    },

    yellow: {
      lighter: alpha("#FCC573", 0.2),
      light: "#FCC573",
      main: "#FFB300",
      contrastText,
    },
    orange: {
      lightest: alpha("#F57C00", 0.1),
      lighter: alpha("#FF8F6B", 0.2),
      light: "#FF8F6B",
      main: "#F57C00",
      deep: "#FF5722",
      contrastText,
    },
    red: {
      lightest: alpha("#FF5722", 0.1),
      lighter: alpha("#FF5722", 0.1),
      light: alpha("#FF5722", 0.1),
      main: "#D55F5A",
      contrastText,
    },
    blue: {
      lighter: alpha("#5B93FF", 0.2),
      light: alpha("#5B93FF", 0.1),
      main: "#5B93FF",
      contrastText,
    },
    grey: {},
  };
};

export default Theme;
