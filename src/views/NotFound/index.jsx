import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import SvgIconComponent from "c/Hybrid/MainSvgIconComponent";
import notFound from "../../assets/SVG/404-image.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: { xs: "calc(100vh - 13.4rem)", md: "calc(100vh - 11.2rem)" } }}
    >
      <Box>
        <Box display="flex" justifyContent="center" mb={1}>
          <SvgIconComponent icon={notFound} size="100%" />
        </Box>
        <Box ml={3} mr={3}>
          <Stack direction="row" justifyContent="center">
            <Typography variant="h4">We Couldn’t Find the Page You Were Looking For</Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
            <Button variant="contained" onClick={() => navigate("/")}>
              Go to Home
            </Button>
          </Stack>
        </Box>
      </Box>
    </Grid>
  );
};

export default NotFound;
