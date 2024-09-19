import PropTypes from "prop-types";
import { Box, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography } from "@mui/material";
import SvgIconComponent from "../MainSvgIconComponent";
import confirmIcon from "../../../assets/SVG/icon-confirm-dialog.svg";
import errorIcon from "../../../assets/SVG/icon-error-dialog.svg";
import warningIcon from "../../../assets/SVG/icon-alert-dialog.svg";
import informationIcon from "../../../assets/SVG/icon-information-dialog.svg";

const dialogType = {
  Confirm: { bg: "#e7eefa", bc: "#c2d6f1", icon: confirmIcon },
  Error: { bg: "#fceeea", bc: "#eccfc8", icon: errorIcon },
  Warning: { bg: "#e7eefa", bc: "#c2d6f1", icon: warningIcon },
  Information: { bg: "#edfcf0", bc: "#aff0bb", icon: informationIcon },
};

const MainDialog = ({ open }) => {
  return open.isOpen ? (
    <Dialog
      open={open.isOpen}
      onClose={open.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: dialogType[open.type].bg,
          border: `0.2rem solid ${dialogType[open.type].bc}`,
          borderRadius: "1rem",
        },
      }}
    >
      <DialogContent
        sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", backgroundColor: "red" }}
      >
        <IconButton>
          <SvgIconComponent icon={dialogType[open.type].icon} size={47} />
        </IconButton>
        <Box id="alert-dialog-description">
          <Typography variant="h2" ml={2} sx={{ color: "#000", mb: 1 }}>
            {open.type}
          </Typography>
          <Typography variant="h5" ml={2}>
            {open.message}
          </Typography>
        </Box>
        <IconButton onClick={open.onClose} size="large" sx={{ ml: "auto" }}>
          <Icon className="icon-icon-close" fontSize="small" />
        </IconButton>
      </DialogContent>
      <DialogActions sx={{ pr: 4, pb: 2.5 }}>
        <Button variant="contained" onClick={open.onClick} autoFocus color="secondary">
          Yes
        </Button>
        <Button variant="outlined" onClick={open.onClose} color="secondary">
          No
        </Button>
      </DialogActions>
    </Dialog>
  ) : null;
};
export default MainDialog;

MainDialog.propTypes = {
  open: PropTypes.object,
};
