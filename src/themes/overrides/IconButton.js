// ==============================|| OVERRIDES - ICON BUTTON ||============================== //

export default function IconButton(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          zIndex: 1200,
          transition: "all 0.3s ease",
          "&:hover": {
            background: "transparent",
          },
        },
        sizeLarge: {
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
        },
        sizeMedium: {
          width: theme.spacing(4.5),
          height: theme.spacing(4.5),
        },
        sizeSmall: {
          width: theme.spacing(3.75),
          height: theme.spacing(3.75),
        },
      },
    },
  };
}
