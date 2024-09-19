import { useState } from "react";
import PropTypes from "prop-types";

import { Formik } from "formik";
import * as Yup from "yup";

import { Avatar, Button, Grid, Icon, IconButton, ListItemAvatar, Stack, Typography, useTheme } from "@mui/material";

import MainOutlinedInput from "../../../../Hybrid/MainOutlinedInput";
import MainCheckbox from "../../../../Hybrid/MainCheckbox";
import { postRequestToServer, putRequestToServer } from "../../../../../services";
import { ADD_USERS_API, CHANGE_Image_PATH_API } from "../../../../../utilities/api";
import { FormDataFormatter } from "~/helper/imageCreator";

const UsersAdd = ({ onAfterSubmit }) => {
  const theme = useTheme();
  const [avatarPath, setAvatarPath] = useState();

  const handleAvatarPath = (event) => {
    const file = event.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPath(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const initialValues = {
    userName: "",
    isAdmin: false,
    password: "",
    confirmPass: "",
    file: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("user Name is required"),
    password: Yup.string().required("Password is required"),
    confirmPass: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = async (values) => {
    const dataEntry = {
      userName: values.userName.toUpperCase(),
      password: values.password,
      confirmPassword: values.confirmPass,
      isAdmin: values.isAdmin,
    };

    const response = await postRequestToServer({
      address: ADD_USERS_API,
      dataEntry,
    });

    const userId = response?.data?.data?.userId;

    if (avatarPath && userId) {
      await putRequestToServer({
        address: `${CHANGE_Image_PATH_API}/${userId}`,
        dataEntry: FormDataFormatter("file", values.file),
      });
    }
    onAfterSubmit();
  };

  return (
    <>
      <Typography variant="h2" mb={5}>
        Create User
      </Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, handleBlur, handleChange, handleSubmit, touched, values, setFieldValue }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack
                  spacing={1}
                  textAlign="center"
                  sx={{
                    width: "max-content",
                    margin: "auto",
                    position: "relative",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ width: "15rem", height: "15rem" }} alt="add image" src={avatarPath} />
                    <IconButton
                      component="label"
                      size="large"
                      sx={{
                        backgroundColor: theme.palette.secondary.lightest,
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <Icon className="icon-icon-camera" />
                      <input
                        hidden
                        id="file"
                        name="file"
                        type="file"
                        onChange={(event) => {
                          setFieldValue("file", event.target.files[0]);
                          handleAvatarPath(event);
                        }}
                      />
                    </IconButton>
                  </ListItemAvatar>
                </Stack>
              </Grid>

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
                    error={Boolean(touched.userName && errors.userName)}
                    textError={touched?.userName && errors?.userName}
                    fullWidth={true}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <MainOutlinedInput
                    id="password"
                    label="New Password"
                    type="password"
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your new password"
                    error={Boolean(touched.password && errors.password)}
                    textError={touched?.password && errors?.password}
                    fullWidth={true}
                    isShowIcon={true}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <MainOutlinedInput
                    id="confirmPass"
                    label="Confirm Password"
                    type="password"
                    value={values.confirmPass}
                    name="confirmPass"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your new password again"
                    error={Boolean(touched.confirmPass && errors.confirmPass)}
                    textError={touched?.confirmPass && errors?.confirmPass}
                    fullWidth={true}
                    isShowIcon={true}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <MainCheckbox
                    name="isAdmin"
                    checked={values.isAdmin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    color="primary"
                    label="Admin User"
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} mt={2}>
                <Button fullWidth size="large" type="submit" variant="contained">
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};
export default UsersAdd;

UsersAdd.propTypes = {
  onAfterSubmit: PropTypes.func,
};
