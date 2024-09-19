// ==============================|| OVERRIDES - TABS ||============================== //

export default function Tabs(theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        vertical: {
          overflow: "visible",
        },
        indicator: {
          backgroundColor: theme.palette.secondary.dark,
        },
      },
    },
  };
}
