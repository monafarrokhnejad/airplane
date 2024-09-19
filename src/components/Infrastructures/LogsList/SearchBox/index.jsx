import { cloneElement, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Icon, useTheme } from "@mui/material";
import Popover from "@mui/material/Popover";

const SearchBox = ({ component }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button aria-describedby={id} variant="contained" onClick={handleClick} sx={{ mr: 0.5 }}>
        <Icon className="icon-icon-search" fontSize="small" />
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
          p={2}
          maxWidth="100%"
          width={300}
          sx={{
            backgroundColor: theme.palette.primary.lighter,
            boxShadow: "none",
            borderRadius: "0.2rem",
          }}
        >
          {cloneElement(component, { onClose: handleClose })}
        </Box>
      </Popover>
    </>
  );
};

export default SearchBox;
SearchBox.propTypes = {
  component: PropTypes.node,
};
