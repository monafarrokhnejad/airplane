import Filters from "c/Infrastructures/Filters";
import PropTypes from "prop-types";
import { useIsMobile } from "~/hooks/useIsMobile";
import UsersFilter from "./UsersFilter";
import { Button } from "@mui/material";

const ToolsBar = ({ setIsOpenDetail }) => {
  const isMobile = useIsMobile();

  return (
    <>
      <Button variant="contained" onClick={() => setIsOpenDetail(true)} sx={{ mr: { xs: 0.2, sm: 1.2 } }}>
        {isMobile ? "+" : "Add User"}
      </Button>
      <Filters component={<UsersFilter />} />
    </>
  );
};

export default ToolsBar;

ToolsBar.propTypes = {
  setIsOpenDetail: PropTypes.func,
};
