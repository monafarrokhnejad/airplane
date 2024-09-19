import { useContext } from "react";
import PropTypes from "prop-types";

import { Box, Button, Divider, Icon, useTheme } from "@mui/material";

import { AppContext } from "../../../context/AppContext";
import { onLogout } from "./Logout";

const FooterSide = ({ isOpen }) => {
  const { setIsAuthenticated } = useContext(AppContext);
  const theme = useTheme();

  const handleLogout = () => {
    setIsAuthenticated(false);
    onLogout();
  };

  const LogoutIcon = () => <Icon fontSize="large" className="icon-icon-log-out" />;

  return (
    <Box width="100%" position="absolute" bottom={0} left={0} p={`0 ${theme.customGaps.main}`}>
      <Divider />
      <Box p={`${theme.customGaps.component} 0`} display="flex" justifyContent="center">
        {isOpen ? (
          <Button
            fullWidth
            onClick={handleLogout}
            startIcon={LogoutIcon()}
            color="error"
            sx={{
              justifyContent: "flex-start",
            }}
          >
            Logout Account
          </Button>
        ) : (
          <Button fullWidth onClick={handleLogout} color="error">
            {LogoutIcon()}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default FooterSide;

FooterSide.propTypes = {
  isOpen: PropTypes.bool,
};
