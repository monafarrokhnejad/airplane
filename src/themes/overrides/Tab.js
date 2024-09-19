// ==============================|| OVERRIDES - TAB ||============================== //

export default function Tab(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          marginRight: theme.customGaps.component,
          color: theme.palette.secondary.light,
          fontFamily: "Nunito",
          fontSize: "1.8rem",
          fontWeight: "700",
          "&.Mui-selected": {
            color: theme.palette.secondary.dark,
          },
        },
      },
    },
  };
}
