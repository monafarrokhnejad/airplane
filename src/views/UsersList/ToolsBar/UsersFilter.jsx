import PropTypes from "prop-types";
import MainOutlinedInput from "c/Hybrid/MainOutlinedInput";
import { Formik } from "formik";
import { Button, Grid, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setUsersFilter } from "~/store/users/UsersSlice";

const UsersFilter = ({ onClose }) => {
  const { userName, isActive, isAdmin } = useSelector((state) => state.users.usersFilter);
  const dispatch = useDispatch();

  const initialValues = {
    userName,
    isActive,
    isAdmin,
  };

  const onSubmit = async (values) => {
    dispatch(setUsersFilter({ ...values, userName: values.userName.toUpperCase() }));
    onClose();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleBlur, handleChange, handleSubmit, values, setFieldValue }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <MainOutlinedInput
                  id="userName"
                  label="UserName"
                  type="text"
                  value={values.userName.toUpperCase()}
                  name="userName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  fullWidth={true}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1}>
                <InputLabel id="isActive-label">Active Users</InputLabel>
                <Select
                  labelId="isActive-label"
                  id="isActive"
                  label="Active Users"
                  value={values.isActive}
                  onChange={(e) => setFieldValue("isActive", e.target.value)}
                >
                  <MenuItem value={2}>All</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                  <MenuItem value={0}>No</MenuItem>
                </Select>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1}>
                <InputLabel id="isAdmin-label">Admin Users</InputLabel>
                <Select
                  labelId="isAdmin-label"
                  id="isAdmin"
                  label="Admin Users"
                  value={values.isAdmin}
                  onChange={(e) => setFieldValue("isAdmin", e.target.value)}
                >
                  <MenuItem value={2}>All</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                  <MenuItem value={0}>No</MenuItem>
                </Select>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default UsersFilter;
UsersFilter.propTypes = {
  onClose: PropTypes.func,
};
