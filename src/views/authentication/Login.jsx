import { useState } from "react";

// material-ui
import { Grid, Stack, Typography } from "@mui/material";

// project import
import Logo from "../../components/Infrastructures/Logo";
import AuthLogin from "./auth-forms/AuthLogin";
import AuthWrapper from "./AuthWrapper.jsx";

// ================================|| LOGIN ||================================ //

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthWrapper isLogin={isLogin}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="center">
            <Logo />
          </Stack>
          <Stack direction="row" justifyContent="center" sx={{ mb: { xs: "2rem", lg: "4rem" } }}>
            <Typography variant="h4">Access Violation Error Logs</Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" sx={{ mb: { xs: "2rem", lg: "4rem" } }}>
            <Typography variant="h1">Login</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin isLogin={isLogin} setIsLogin={setIsLogin} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
