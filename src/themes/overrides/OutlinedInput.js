// ==============================|| OVERRIDES - OUTLINED INPUT ||============================== //

export default function OutlinedInput(theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          borderRadius: theme.customBR.main,
          "&.Mui-error": {
            fontSize: "1.2rem",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "1.05rem 1.4rem 1.05rem 1.2rem",
        },
        notchedOutline: {
          borderColor: "transparent",
        },
        root: {
          backgroundColor: theme.palette.secondary[200],
          borderRadius: theme.customBR.main,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&.Mui-focused": {
            boxShadow: theme.customShadows.input,
            "& .MuiOutlinedInput-notchedOutline": {
              border: `0.1rem solid ${theme.palette.primary.light}`,
            },
          },
          "&.Mui-error": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.red.lighter,
            },
            "&.Mui-focused": {
              boxShadow: theme.customShadows.error,
              "& .MuiOutlinedInput-notchedOutline": {
                border: `0.1rem solid ${theme.palette.red.lighter}`,
              },
            },
          },
        },
        inputSizeSmall: {
          padding: "0.75rem 0.8rem 0.75rem 1.2rem",
        },
        inputMultiline: {
          padding: 0,
        },
      },
    },
  };
}
