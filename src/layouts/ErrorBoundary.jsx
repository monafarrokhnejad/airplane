import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import errorBoundary from "../assets/images/Boundary-image.png";
import { onLogout } from "c/Infrastructures/Sidebar/Logout";

function ErrorBoundary() {
  const navigate = useNavigate();
  let error = useRouteError();
  console.error(error);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: { xs: "calc(100vh - 13.4rem)", md: "calc(100vh - 11.2rem)" } }}
    >
      <Box>
        <Box display="flex" justifyContent="center" mb={1}>
          <img src={errorBoundary} alt="image" style={{ width: "100%" }} />
        </Box>
        <Box ml={3} mr={3}>
          <Stack direction="row" justifyContent="center">
            <Typography variant="h4">There is a problem with this page</Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
              sx={{ mr: 2 }}
            >
              Go to Home
            </Button>
            <Button variant="contained" onClick={() => onLogout()}>
              Refresh
            </Button>
          </Stack>
        </Box>
      </Box>
    </Grid>
  );
}

export default ErrorBoundary;
