import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Box, Drawer, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

const InsideDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  "& .MuiDrawer-paper": {
    overflow: "hidden",
    padding: theme.customGaps.main,
    marginRight: theme.customGaps.main,
    border: "none",
    backgroundColor: theme.palette.primary.contrastText,
    boxShadow: theme.customShadows.normal,
    borderRadius: theme.customBR.main,
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(12),
      },
    }),
  },
}));

const OutSideDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "detailbar" && prop !== "isMobile",
})(({ theme, detailbar, isMobile }) =>
  detailbar
    ? {
        "& .MuiBackdrop-root": {
          display: "none",
          width: "max-content",
        },
        "& .MuiPaper-root": {
          backgroundColor: theme.palette.primary.lighter,
          backdropFilter: "blur(1.25rem)",
          width: isMobile ? "100%" : "max-content",
        },
        "& .MuiBox-root ": {
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }
    : {
        "& .MuiBackdrop-root": {
          backgroundColor: theme.palette.primary.lighter,
          backdropFilter: "blur(1.25rem)",
        },
        "& .MuiPaper-root": {
          position: "absolute",
          left: theme.customGaps.main,
          top: "4.8rem",
          backgroundColor: theme.palette.common.white,
          height: "calc(100vh - 10rem)",
          borderRadius: theme.customBR.main,
        },
      }
);

const useOutside = (ref, onClick) => {
  useEffect(() => {
    const handleClickOutside = (event) => ref.current && !ref.current.contains(event.target) && onClick?.();
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick, ref]);
};

const MainDrawer = ({
  children,
  isInsideLayout,
  isOpen,
  variant,
  anchor,
  onClose,
  drawerWidth,
  detailbar,
  isMobile,
}) => {
  const theme = useTheme();
  const ref = useRef(null);
  useOutside(ref, onClose);

  return isInsideLayout ? (
    <InsideDrawer open={isOpen} variant={variant} drawerWidth={drawerWidth}>
      {children}
    </InsideDrawer>
  ) : (
    <OutSideDrawer open={isOpen} anchor={anchor} detailbar={detailbar} isMobile={isMobile}>
      <Box
        ref={ref}
        width={drawerWidth}
        p={theme.customGaps.main}
        role="presentation"
        onClick={!detailbar ? onClose : null}
        onKeyDown={!detailbar ? onClose : null}
        sx={{ height: "100%" }}
      >
        {children}
      </Box>
    </OutSideDrawer>
  );
};

export default MainDrawer;

MainDrawer.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  variant: PropTypes.string,
  anchor: PropTypes.string,
  onClose: PropTypes.func,
  isInsideLayout: PropTypes.bool,
  drawerWidth: PropTypes.string,
  detailbar: PropTypes.string,
  isMobile: PropTypes.bool,
};
