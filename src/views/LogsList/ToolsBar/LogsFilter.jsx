import PropTypes from "prop-types";
import SimpleBar from "simplebar-react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import MainOutlinedInput from "c/Hybrid/MainOutlinedInput";
import { setLogsFilter } from "~/store/logsList/LogsSlice";
import { Button, Grid, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import MainDatePicker from "c/Hybrid/MainDatePicker";
import { useStatusCombo } from "~/hooks/data/logsList/useStatusCombo";
import { useNavigate } from "react-router-dom";

const LogsFilter = ({ onClose }) => {
  const { data: { data } = {} } = useStatusCombo();
  const statusComboList = data?.data ?? [];

  const { startDate, endDate } = useSelector((state) => state.logs.logsFilter);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = new URLSearchParams(window.location.search);
  const initialValues = {
    startDate,
    endDate,
    status: params.get("status") || [],
    customer: params.get("customer") || "",
    userId: params.get("userId") || "",
    versionNo: params.get("versionNo") || "",
    application: params.get("application") || "",
    host: params.get("host") || "",
    path: params.get("path") || "",
    isSeen: params.get("isSeen") ? Number(params.get("isSeen")) : 2,
    isFixed: params.get("isFixed") ? Number(params.get("isFixed")) : 2,
    hasJiraLink: params.get("hasJiraLink") ? Number(params.get("hasJiraLink")) : 2,
  };

  const onSubmit = async (values) => {
    dispatch(setLogsFilter({ startDate: values.startDate, endDate: values.endDate }));
    const urlParams = [];

    if (values.status.length) {
      urlParams.push(`status=${typeof values.status === "object" ? values.status?.join() : values.status}`);
    }
    if (values.customer) {
      urlParams.push(`customer=${values.customer}`);
    }
    if (values.userId) {
      urlParams.push(`userId=${values.userId}`);
    }
    if (values.versionNo) {
      urlParams.push(`versionNo=${values.versionNo}`);
    }
    if (values.application) {
      urlParams.push(`application=${values.application}`);
    }
    if (values.host) {
      urlParams.push(`host=${values.host}`);
    }
    if (values.path) {
      urlParams.push(`path=${values.path}`);
    }
    urlParams.push(`isSeen=${values.isSeen}`);
    urlParams.push(`isFixed=${values.isFixed}`);
    urlParams.push(`hasJiraLink=${values.hasJiraLink}`);

    const constructedUrl = urlParams.length > 0 ? `/logs?${urlParams.join("&")}` : "/logs";
    navigate(constructedUrl);
    onClose();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleBlur, handleChange, handleSubmit, values, setFieldValue }) => (
        <form noValidate onSubmit={handleSubmit}>
          <SimpleBar style={{ height: "calc(100vh - 52rem)", marginBottom: "2rem" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <MainDatePicker
                    fullWidth
                    label="Start Date"
                    value={values.startDate}
                    onChange={(e) => setFieldValue("startDate", e)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <MainDatePicker
                    fullWidth
                    label="End Date"
                    value={values.endDate}
                    onChange={(e) => setFieldValue("endDate", e)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <MainOutlinedInput
                    id="customer"
                    label="Customer"
                    type="text"
                    value={values.customer}
                    name="customer"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter customer name"
                    fullWidth={true}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <MainOutlinedInput
                    id="userId"
                    label="User"
                    type="text"
                    value={values.userId}
                    name="userId"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter user id"
                    fullWidth={true}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <MainOutlinedInput
                    id="versionNo"
                    label="Version Number"
                    type="text"
                    value={values.versionNo}
                    name="versionNo"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter version number"
                    fullWidth={true}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <MainOutlinedInput
                    id="application"
                    label="Application"
                    type="text"
                    value={values.application}
                    name="application"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter application"
                    fullWidth={true}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <MainOutlinedInput
                    id="host"
                    label="Host"
                    type="text"
                    value={values.host}
                    name="host"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter host"
                    fullWidth={true}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <MainOutlinedInput
                    id="path"
                    label="Path"
                    type="text"
                    value={values.path}
                    name="path"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter path"
                    fullWidth={true}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel id="status-label">Status</InputLabel>
                  <Select
                    labelId="status-label"
                    id="status"
                    multiple
                    value={
                      typeof values.status === "string" && values.status !== ""
                        ? values.status.split(",")
                        : values.status
                    }
                    onChange={(e) => setFieldValue("status", e.target.value)}
                  >
                    {statusComboList.length > 0
                      ? statusComboList?.map((item) => (
                          <MenuItem key={item?.status} value={item?.id?.replace(/^.{1}/g, item?.id[0].toLowerCase())}>
                            {item?.status}
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel id="isSeen-label">Is Seen</InputLabel>
                  <Select
                    labelId="isSeen-label"
                    id="isSeen"
                    value={values.isSeen}
                    onChange={(e) => setFieldValue("isSeen", e.target.value)}
                  >
                    <MenuItem value={2}>All</MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel id="isFixed-label">Is Fixed</InputLabel>
                  <Select
                    labelId="isFixed-label"
                    id="isFixed"
                    value={values.isFixed}
                    onChange={(e) => setFieldValue("isFixed", e.target.value)}
                  >
                    <MenuItem value={2}>All</MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel id="hasJiraLink-label">Has Jira Link</InputLabel>
                  <Select
                    labelId="hasJiraLink-label"
                    id="hasJiraLink"
                    value={values.hasJiraLink}
                    onChange={(e) => setFieldValue("hasJiraLink", e.target.value)}
                  >
                    <MenuItem value={2}>All</MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                  </Select>
                </Stack>
              </Grid>
            </Grid>
          </SimpleBar>
          <Button fullWidth type="submit" variant="contained">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default LogsFilter;
LogsFilter.propTypes = {
  onClose: PropTypes.func,
};
