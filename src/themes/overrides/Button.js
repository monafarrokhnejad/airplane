// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
  const disabledStyle = {
    "&.Mui-disabled": {
      border: "none",
    },
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: "1.4rem",
          fontFamily: "Nunito",
          borderRadius: theme.customBR.main,
          textTransform: "capitalize",
        },
        endIcon: {
          "*:nth-of-type(1)": {
            fontSize: "1.2rem",
          },
        },
        contained: {
          ...disabledStyle,
        },
        outlined: {
          ...disabledStyle,
        },
        text: {
          ...disabledStyle,
          border: "none",
        },
      },
    },
  };
}
