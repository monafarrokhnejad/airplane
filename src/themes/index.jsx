import PropTypes from "prop-types";
import { useMemo } from "react";

// material-ui
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// project import
import Palette from "./palette";
import Typography from "./typography";
import CustomShadows from "./shadows";
import CustomGaps from "./gaps";
import componentsOverride from "./overrides";
import CustomBorderRadius from "./borderRadius";
import "../assets/fontello/css/fontello.css";
import "../assets/fonts/font.css";

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }) {
  const palette = Palette("light", "default");
  const themeCustomShadows = useMemo(() => CustomShadows(palette), [palette]);
  const themeCustomGaps = useMemo(() => CustomGaps(), []);
  const themeCustomBorderRadius = useMemo(() => CustomBorderRadius(), []);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: "ltr",
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette,
      customShadows: themeCustomShadows,
      customGaps: themeCustomGaps,
      customBR: themeCustomBorderRadius,
      typography: Typography,
    }),
    [palette, themeCustomShadows, themeCustomGaps, themeCustomBorderRadius]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node,
};
