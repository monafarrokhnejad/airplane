// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          minWidth: theme.customGaps.main,
          fontSize: "1.2rem",
        },
        previousNext: {
          background: theme.palette.secondary[300],
        },
      },
    },
  };
}
