import { alpha } from "@mui/system";
import ThemeOption from "./theme";
import { common } from "@mui/material/colors";

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode) => {
  const paletteColor = ThemeOption();
  return {
    mode,
    action: {
      disabled: paletteColor.neutral[200],
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    ...paletteColor,
    text: {
      primary: paletteColor.neutral[600],
      secondary: paletteColor.neutral[500],
      disabled: alpha(paletteColor.neutral[900], 0.38),
    },

    background: {
      default: common.white,
      paper: common.white,
    },
    divider: paletteColor.neutral[200],
  };
};
export default Palette;
