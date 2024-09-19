import PropTypes from "prop-types";

// project import
import AuthImageBox from "./AuthImageBox";
import { Box, Card } from "@mui/material";

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

const AuthCard = ({ children, isLogin, ...other }) => (
  <Card
    {...other}
    sx={{
      maxWidth: { xs: 400, lg: 1440 },
      width: 1000,
      m: { xs: 2.5, lg: 3 },
      "& > *": {
        flexGrow: 1,
        flexBasis: "50%",
      },
      display: "flex",
      flexDirection: { xs: "column-reverse", lg: "row" },
      borderRadius: { xs: 2, lg: 15 },
      pb: { xs: "1rem", lg: "2.5rem" },
    }}
  >
    <Box sx={{ p: { xs: 3, sm: 3, md: 4, xl: 5 }, mt: { lg: "3.5rem" } }}>{children}</Box>
    <Box sx={{ display: { xs: "none", lg: "flex" } }}>
      <AuthImageBox isLogin={isLogin} />
    </Box>
  </Card>
);

AuthCard.propTypes = {
  children: PropTypes.node,
  isLogin: PropTypes.bool,
};

export default AuthCard;
