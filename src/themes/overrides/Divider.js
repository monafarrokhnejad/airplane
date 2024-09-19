// ==============================|| OVERRIDES - ICON BUTTON ||============================== //

export default function Divider(theme) {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.secondary[100],
          borderWidth: "0.1rem",
        },
      },
    },
  };
}
