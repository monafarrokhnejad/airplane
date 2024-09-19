import PropTypes from "prop-types";
import { useIsMobile } from "../hooks/useIsMobile";
import ToolbarSide from "../components/Infrastructures/Sidebar/ToolbarSide";
import ListSide from "../components/Infrastructures/Sidebar/ListSide";
import FooterSide from "../components/Infrastructures/Sidebar/FooterSide";
import MainDrawer from "../components/Hybrid/MainDrawer";
import { Divider, Icon, IconButton, useTheme } from "@mui/material";

const drawerWidth = "30rem";

const SideBar = ({ isOpen, anchor, variant, toggleDrawer, toggleModal, userInfo }) => {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const customStyleIConClose = {
    position: "fixed",
    top: "2.0rem",
    left: theme.customGaps.main,
    width: theme.customGaps.main,
    height: theme.customGaps.main,
  };

  const customStyleIConBtn = {
    position: "absolute",
    left: isOpen ? "30.8rem" : "10.7rem",
    top: "5.7rem",
    width: theme.customGaps.main,
    height: theme.customGaps.main,
    borderRadius: theme.customBR.main,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.customShadows.normal,
    transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
  };

  return (
    <>
      <MainDrawer
        isOpen={isOpen}
        anchor={anchor}
        onClose={toggleDrawer(false)}
        drawerWidth={drawerWidth}
        isInsideLayout={!isMobile}
        variant={variant}
      >
        {isMobile && (
          <IconButton sx={customStyleIConClose} onClick={toggleDrawer(false)}>
            <Icon className="icon-icon-close-menu" />
          </IconButton>
        )}
        <ToolbarSide isOpen={isOpen} toggleModal={toggleModal} userInfo={userInfo} />
        <Divider />
        <ListSide />
        <FooterSide isOpen={isOpen} />
      </MainDrawer>

      {!isMobile && (
        <IconButton sx={customStyleIConBtn} onClick={toggleDrawer(!isOpen)}>
          <Icon className="icon-icon-arrow-right" />
        </IconButton>
      )}
    </>
  );
};

export default SideBar;

SideBar.propTypes = {
  isOpen: PropTypes.bool,
  anchor: PropTypes.string,
  variant: PropTypes.string,
  toggleDrawer: PropTypes.func,
  toggleModal: PropTypes.func,
  userInfo: PropTypes.object,
};
