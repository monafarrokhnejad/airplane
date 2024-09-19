import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

const TopBar = ({ title, component }) => {
  return (
    <Grid container mb={{ xs: 2 }} pl={{ xs: 4, sm: 0 }} alignItems="start" justifyContent="space-between">
      <Grid item xs={6} sm={3} md={7}>
        <Typography variant="h1">{title}</Typography>
      </Grid>
      <Grid item xs={6} sm={7} md={5} justifyContent="flex-end" display="flex">
        {component}
      </Grid>
    </Grid>
  );
};

export default TopBar;

TopBar.propTypes = {
  title: PropTypes.string,
  component: PropTypes.node,
};
