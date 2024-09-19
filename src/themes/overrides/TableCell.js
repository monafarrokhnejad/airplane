// ==============================|| OVERRIDES - TABLE CELL ||============================== //

export default function TableCell(theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "1.4rem",
          padding: theme.customGaps.main,
          borderRadius: theme.customBR.main,
          borderColor: theme.palette.divider,
        },
        head: {
          fontWeight: 600,
          paddingTop: 20,
          paddingBottom: 20,
        },
      },
    },
  };
}
