import PropTypes from "prop-types";
import { Icon, Box, IconButton, useTheme } from "@mui/material";

const ToolbarDetail = ({ onClose, handleMaxDetail, maxWidth, isMobile }) => {
  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="flex-end" position="absolute" top="2.5rem" right="2.5rem">
      {!isMobile && (
        <IconButton
          onClick={handleMaxDetail}
          size="large"
          sx={{
            mr: "1rem",
            backgroundColor: theme.palette.secondary.lightest,
          }}
        >
          <Icon className={!maxWidth ? "icon-icon-maximize" : "icon-icon-minimize"} />
        </IconButton>
      )}
      <IconButton
        onClick={onClose}
        size="large"
        sx={{
          backgroundColor: theme.palette.secondary.lightest,
        }}
      >
        <Icon className="icon-icon-close" fontSize="small" color="error" />
      </IconButton>
    </Box>
  );
};
export default ToolbarDetail;

ToolbarDetail.propTypes = {
  onClose: PropTypes.func,
  handleMaxDetail: PropTypes.func,
  maxWidth: PropTypes.bool,
  isMobile: PropTypes.bool,
};
