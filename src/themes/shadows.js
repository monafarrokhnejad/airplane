// material-ui
import { alpha } from "@mui/material/styles";

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const CustomShadows = (palette) => ({
  z1: `0 0.2rem 0.8rem ${alpha(palette.secondary[800], 0.15)}`,
  normal: `0 0 2rem 0 ${alpha(palette.common.black, 0.05)}`,
  error: `0 0 2rem 0 ${alpha(palette.red.main, 0.05)}`,
  input: `0 0 2rem 0 ${alpha(palette.primary.main, 0.05)}`,
});

export default CustomShadows;
