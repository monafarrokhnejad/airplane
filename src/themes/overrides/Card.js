// ==============================|| OVERRIDES - CARD CONTENT ||============================== //

export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: theme.customShadows.z1,
        },
      },
    },
  };
}
