import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MainDrawer from "../components/Hybrid/MainDrawer";
import ToolbarDetail from "../components/Infrastructures/DetailBar/ToolbarDetail";
import { useIsMobile } from "../hooks/useIsMobile";

const DetailBar = ({ isOpen, anchor, onClose, isSideOpen, component, maxWidthDEtailBar, setMaxWidthDEtailBar }) => {
  const isMobile = useIsMobile();
  const [drawerWidth, setDrawerWidth] = useState("60.3rem");
  const handleMaxDetail = () => setMaxWidthDEtailBar(!maxWidthDEtailBar);

  useEffect(() => {
    if (isMobile) {
      return setDrawerWidth("100%");
    } else {
      if (maxWidthDEtailBar) {
        if (isSideOpen) return setDrawerWidth("calc(100vw  - 34rem)");
        else return setDrawerWidth("calc(100vw  - 14rem)");
      } else return setDrawerWidth("60.3rem");
    }
  }, [maxWidthDEtailBar, isSideOpen, isMobile]);

  return (
    <MainDrawer
      isOpen={isOpen}
      anchor={anchor}
      onClose={onClose}
      drawerWidth={drawerWidth}
      isInsideLayout={false}
      isMobile={isMobile}
      detailbar="true"
    >
      <ToolbarDetail
        isMobile={isMobile}
        onClose={onClose}
        handleMaxDetail={handleMaxDetail}
        maxWidth={maxWidthDEtailBar}
      />
      {component}
    </MainDrawer>
  );
};
export default DetailBar;
DetailBar.propTypes = {
  isSideOpen: PropTypes.bool,
  isOpen: PropTypes.bool,
  anchor: PropTypes.string,
  onClose: PropTypes.func,
  component: PropTypes.node,
  maxWidthDEtailBar: PropTypes.bool,
  setMaxWidthDEtailBar: PropTypes.func,
};
