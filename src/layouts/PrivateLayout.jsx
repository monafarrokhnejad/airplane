import { Suspense, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { SETTING } from "../utilities/storage";
import { getStorage, setStorage } from "../helper/appManager";
import { useIsMobile } from "../hooks/useIsMobile";
import SideBar from "./SideBar";
import styled from "@emotion/styled";
import { Icon, IconButton, useTheme } from "@mui/material";
import Profile from "c/Infrastructures/Profile";
import { useUserInfo } from "~/hooks/data/useUserInfo";
import Loader from "./loader/Loader";
import { useSelector } from "react-redux";
import { diffInDays } from "~/helper/dateMoment";

const Layout = styled.div((props) => ({
  display: "flex",
  flexDirection: props.column && "column",
  backgroundColor: props.theme.palette.secondary[200],
  padding: props.theme.customGaps.main,
}));

const MainContent = styled.div((props) => ({
  height: "calc(100vh - 5rem)",
  width: window.innerWidth > 768 ? `calc(100vw - ${props?.isOpen ? "37rem" : "17rem"})` : "100%",
  position: "relative",
}));

const PrivateLayout = ({ emptyLayout }) => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const location = useLocation();
  const { isAuthenticated } = useContext(AppContext);
  const { data: { data } = {}, refetch } = useUserInfo();
  const hasPermission = data?.data?.isAdmin;
  const logsFilter = useSelector((state) => state.logs.logsFilter);

  const [isOpen, setIsOpen] = useState(getStorage(SETTING)?.isOpen);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setIsOpen(open);
  };

  const toggleModal = (value) => () => setIsOpenModal(value);

  useEffect(() => {
    setStorage({ key: SETTING, value: { isOpen }, hasPrev: true });
  }, [isOpen]);

  useEffect(() => {
    const calcDiffInDays = diffInDays({ endDate: logsFilter?.endDate, startDate: logsFilter?.startDate });
    setStorage({
      key: SETTING,
      value: { calcDiffInDays },
      hasPrev: true,
    });
  }, [logsFilter?.endDate, logsFilter?.startDate]);

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (location?.pathname.slice(1) === "users" && !hasPermission) return <Navigate to="/" />;
  return !emptyLayout ? (
    <Layout theme={theme}>
      <Profile isOpenModal={isOpenModal} toggleModal={toggleModal} userInfo={data?.data ?? {}} />
      <SideBar
        toggleModal={toggleModal}
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        variant="permanent"
        anchor="left"
        userInfo={data?.data ?? {}}
      />
      <MainContent isOpen={isOpen}>
        {isMobile && (
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              position: "absolute",
              top: "-0.3rem",
              left: "-0.7rem",
            }}
          >
            <Icon className="icon-icon-menu" />
          </IconButton>
        )}
        <Suspense fallback={<Loader />}>
          <Outlet context={[isOpen, refetch]} />
        </Suspense>
      </MainContent>
    </Layout>
  ) : (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default PrivateLayout;

PrivateLayout.propTypes = {
  emptyLayout: PropTypes.string,
};
