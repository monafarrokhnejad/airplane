import { cloneElement, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Icon, IconButton, Typography, useTheme } from "@mui/material";
import Popover from "@mui/material/Popover";
import { useIsMobile } from "~/hooks/useIsMobile";

const Filters = ({ component }) => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        endIcon={isMobile ? null : <Icon className="icon-icon-filter" fontSize="small" />}
      >
        {isMobile ? <Icon className="icon-icon-filter" fontSize="small" /> : "Filter"}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          p={3}
          maxWidth="100%"
          width={400}
          sx={{
            backgroundColor: theme.palette.primary.lighter,
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h2">Filters</Typography>
            <IconButton
              onClick={handleClose}
              size="large"
              sx={{
                backgroundColor: theme.palette.secondary.lightest,
              }}
            >
              <Icon className="icon-icon-close" fontSize="small" color="error" />
            </IconButton>
          </Box>
          {cloneElement(component, { onClose: handleClose })}
        </Box>
      </Popover>
    </>
  );
};

export default Filters;
Filters.propTypes = {
  component: PropTypes.node,
};
