import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { Grid, useTheme } from "@mui/material";

import MainDatePicker from "c/Hybrid/MainDatePicker";
import { setLogsFilter } from "~/store/logsList/LogsSlice";

const DashboardsFilter = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const logsFilter = useSelector((state) => state.logs.logsFilter);

  return (
    <Grid container spacing={2} justifyContent="flex-end">
      <Grid item lg={5} sm={6} xs={12}>
        <MainDatePicker
          fullWidth
          sx={{ backgroundColor: theme.palette.common.white, boxShadow: theme.customShadows.normal }}
          value={logsFilter?.startDate}
          onChange={(e) => dispatch(setLogsFilter({ ...logsFilter, startDate: e }))}
          maxDate={logsFilter?.endDate}
        />
      </Grid>
      <Grid item lg={5} sm={6} xs={12}>
        <MainDatePicker
          fullWidth
          sx={{ backgroundColor: theme.palette.common.white, boxShadow: theme.customShadows.normal }}
          value={logsFilter?.endDate}
          onChange={(e) => dispatch(setLogsFilter({ ...logsFilter, endDate: e }))}
          minDate={logsFilter?.startDate}
          disabled={logsFilter?.startDate === null}
        />
      </Grid>
    </Grid>
  );
};

export default DashboardsFilter;
DashboardsFilter.propTypes = {
  onClose: PropTypes.func,
};
