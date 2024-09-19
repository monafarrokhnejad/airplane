import PropTypes from "prop-types";
import Logo from "../Logo";
import { Avatar, Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import SvgIconComponent from "../../Hybrid/MainSvgIconComponent/index";
import editIcon from "../../../assets/SVG/icon-pen.svg";

const ToolbarSide = ({ userInfo, isOpen, toggleModal }) => {
  const theme = useTheme();

  return (
    <Box pb={2}>
      <Logo isMiniSize={!isOpen} />
      <Box display="flex" alignItems="center" justifyContent={isOpen ? "flex-start" : "center"}>
        <Box position="relative">
          <Avatar alt={userInfo?.userName} src={userInfo?.image} sx={{ width: 44, height: 44 }} />
          {!isOpen && (
            <IconButton
              size="small"
              onClick={toggleModal(true)}
              sx={{ position: "absolute", bottom: "-0.8rem", right: "-0.8rem" }}
            >
              <SvgIconComponent icon={editIcon} />
            </IconButton>
          )}
        </Box>
        {isOpen && (
          <Box ml={1.2}>
            <Typography variant="subtitle2" color={theme.palette.secondary.dark}>
              {userInfo?.userName}
            </Typography>
            <Button
              onClick={toggleModal(true)}
              sx={{
                p: 0,
                fontSize: "1.2rem",
              }}
            >
              Edit Profile
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default ToolbarSide;

ToolbarSide.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  userInfo: PropTypes.object,
};
