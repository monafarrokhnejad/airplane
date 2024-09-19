// ==============================|| OVERRIDES - DIALOG ||============================== //

export default function Dialog() {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiDialog-paper": {
            width: "50rem !important",
          },
        },
      },
    },
  };
}
