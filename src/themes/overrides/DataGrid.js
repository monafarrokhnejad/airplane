// ==============================|| OVERRIDES - DataGrid ||============================== //

export default function DataGrid(theme) {
  return {
    MuiTablePagination: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          width: "100%",
        },
        select: {
          borderRadius: "0.4rem",
          backgroundColor: theme.palette.secondary[100],
        },
        selectLabel: {
          fontSize: "1.4rem",
        },
        displayedRows: {
          fontSize: "1.4rem",
          [theme.breakpoints.up("sm")]: {
            display: "none",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiIconButton-root": {
            "& .MuiSvgIcon-root": {
              fontSize: "1.4rem",
            },
          },
          border: "none",
          boxShadow: theme.customShadows.normal,
          borderRadius: theme.customBR.main,
          height: "calc( 100vh - 10.5rem)",
          "& ::-webkit-scrollbar": {
            width: "0.2rem",
          },
          "& ::-webkit-scrollbar-thumb": {
            borderRadius: theme.customBR.main,
            backgroundColor: theme.palette.secondary.lighter,
          },
        },
        footerContainer: {
          padding: `0 ${theme.customGaps.main}`,
          borderTop: `0.2rem solid ${theme.palette.secondary[300]} !important`,
          width: "100%",
          backgroundColor: theme.palette.primary.contrastText,
        },
        main: {
          backgroundColor: theme.palette.primary.contrastText,
        },
        selectedRowCount: {
          fontSize: "1.4rem",
          display: "none",
        },
        columnHeaders: {
          borderBottom: `0.2rem solid ${theme.palette.neutral[200]} !important`,
          color: theme.palette.secondary.dark,
        },
        row: {
          cursor: "pointer",
          "&.Mui-hovered": {
            "& .super-app-theme--cell": {
              visibility: "visible",
            },
          },
        },
        columnHeaderTitleContainer: {
          justifyContent: "space-between",
          fontSize: "1.4rem",
        },
        cell: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-within": {
            outline: "none",
          },
          borderBottom: `0.1rem solid ${theme.palette.neutral[200]} !important`,
          fontSize: "1.4rem",
        },
        overlay: {
          fontSize: "1.4rem",
        },
      },
    },
  };
}
