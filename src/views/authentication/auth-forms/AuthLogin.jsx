import { useContext, useEffect } from "react";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

import { PropTypes } from "prop-types";
import { AppContext } from "../../../context/AppContext/index";
import { postRequestToServer } from "../../../services/index";
import { getStorage, setStorage } from "../../../helper/appManager";
import { LOGIN_API } from "../../../utilities/api";
import { CURRENT_USER, SETTING } from "../../../utilities/storage";
import MainOutlinedInput from "../../../components/Hybrid/MainOutlinedInput";

// material-ui
import { Stack, Grid, Button } from "@mui/material";

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = ({ isLogin, setIsLogin }) => {
  const { setIsAuthenticated } = useContext(AppContext);

  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("UserName is required"),
    password: Yup.string().max(255).required("Password is required"),
  });

  const onSubmit = async (values, { setErrors, setSubmitting }) => {
    const result = await postRequestToServer({
      address: LOGIN_API,
      dataEntry: { ...values, userName: values.userName.toUpperCase() },
    });
    if (result?.status === 200 && result?.data) {
      setSubmitting(false);
      setStorage({ key: CURRENT_USER, value: result?.data?.data });
      const setting = getStorage(SETTING);

      if (!setting?.isOpen) {
        window.innerWidth > 768
          ? setStorage({ key: SETTING, value: { isOpen: true }, hasPrev: true })
          : setStorage({ key: SETTING, value: { isOpen: false }, hasPrev: true });
      }
      setIsLogin(true);
    } else {
      setErrors({ submit: result.message });
      setSubmitting(false);
    }
  };

  useEffect(() => {
    isLogin &&
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 1000);
  }, [isLogin, setIsAuthenticated]);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <MainOutlinedInput
                  id="userName-login"
                  label="UserName"
                  type="text"
                  value={values.userName.toUpperCase()}
                  name="userName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  error={Boolean(touched.userName && errors.userName)}
                  textError={touched?.userName && errors?.userName}
                  fullWidth={true}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <MainOutlinedInput
                  id="password-login"
                  label="Password"
                  type="password"
                  isShowIcon={true}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  error={Boolean(touched.password && errors.password)}
                  textError={touched.password && errors.password}
                  fullWidth={true}
                />
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Button
                disabled={isSubmitting || isLogin}
                fullWidth={true}
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                disableElevation={true}
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default AuthLogin;
AuthLogin.propTypes = {
  isLogin: PropTypes.bool,
  setIsLogin: PropTypes.func,
};
