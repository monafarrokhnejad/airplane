// ==============================|| OVERRIDES - ICON BUTTON ||============================== //

export default function Icon() {
  return {
    MuiIcon: {
      styleOverrides: {
        root: {
          width: "max-content",
          height: "max-content",
        },
        fontSizeLarge: {
          fontSize: "2rem",
        },
      },
    },
  };
}
