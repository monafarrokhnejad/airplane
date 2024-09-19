import PropTypes from "prop-types";

// material-ui
import { Box, Grid } from "@mui/material";

// project import
import AuthCard from "./AuthCard";

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children, isLogin }) => (
  <Box sx={{ minHeight: "100vh" }}>
    <Grid
      item
      xs={12}
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: { xs: "calc(100vh - 13.4rem)", md: "calc(100vh - 11.2rem)" } }}
    >
      <Grid item>
        <AuthCard isLogin={isLogin}>{children}</AuthCard>
      </Grid>
    </Grid>
  </Box>
);

AuthWrapper.propTypes = {
  children: PropTypes.node,
  isLogin: PropTypes.bool,
};

export default AuthWrapper;
