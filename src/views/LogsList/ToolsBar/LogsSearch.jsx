import PropTypes from "prop-types";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import MainOutlinedInput from "c/Hybrid/MainOutlinedInput";
import { setLogsSearch } from "~/store/logsList/LogsSlice";
import { Box, Icon, IconButton, useTheme } from "@mui/material";

const LogsSearch = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const initialValues = {
    search: useSelector((state) => state.logs.search),
  };

  const onSubmit = async (values) => {
    dispatch(setLogsSearch(values.search));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleBlur, handleChange, handleSubmit, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Box position="relative" mr={{ xs: 0, sm: 2 }}>
            <MainOutlinedInput
              id="search"
              type="text"
              value={values.search}
              name="search"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Search"
              fullWidth
              sx={{ backgroundColor: { xs: theme.palette.primary.contrastText, sm: theme.palette.primary.lightest } }}
            />
            <IconButton type="submit" sx={{ position: "absolute", right: 0 }}>
              <Icon fontSize="small" className="icon-icon-search" />
            </IconButton>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default LogsSearch;
LogsSearch.propTypes = {
  onClose: PropTypes.func,
};
