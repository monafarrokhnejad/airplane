import { useState } from "react";
import PropTypes from "prop-types";

import { Formik } from "formik";
import * as Yup from "yup";

import { Avatar, Button, Grid, Icon, IconButton, ListItemAvatar, Stack, Typography, useTheme } from "@mui/material";

import MainOutlinedInput from "../../../../Hybrid/MainOutlinedInput";
import MainCheckbox from "../../../../Hybrid/MainCheckbox";
import { putRequestToServer } from "../../../../../services";
import {
  CHANGE_Activation_API,
  CHANGE_Administration_API,
  CHANGE_Image_PATH_API,
  CHANGE_PASSWORD_API,
} from "../../../../../utilities/api";
import { FormDataFormatter } from "~/helper/imageCreator";

const UsersDetail = ({ dataDetail, onAfterSubmit }) => {
  const theme = useTheme();

  const { id, image, userName, isActive, isAdmin } = dataDetail;

  const [isChangePass, setIsChangePass] = useState(false);
  const [avatarPath, setAvatarPath] = useState();

  const handleAvatarPath = (event) => {
    const file = event.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setAvatarPath(reader.result);
    reader.readAsDataURL(file);
  };

  const initialValues = {
    id,
    image,
    userName,
    isActive,
    isAdmin,
    password: "",
    confirmPass: "",
    file: "",
  };

  const validationSchema = Yup.object().shape({
    password: isChangePass && Yup.string().required("Password is required"),
    confirmPass:
      isChangePass &&
      Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
  });

  const onSubmit = async (values) => {
    const requests = [];

    if (values.isActive !== initialValues?.isActive) {
      requests.push(
        putRequestToServer({
          address: `${CHANGE_Activation_API}/${values.id}`,
          dataEntry: { isActive: values.isActive },
        })
      );
    }

    if (values.isAdmin !== initialValues?.isAdmin) {
      requests.push(
        putRequestToServer({
          address: `${CHANGE_Administration_API}/${values.id}`,
          dataEntry: { isAdmin: values.isAdmin },
        })
      );
    }

    if (avatarPath) {
      requests.push(
        putRequestToServer({
          address: `${CHANGE_Image_PATH_API}/${values.id}`,
          dataEntry: FormDataFormatter("file", values.file),
        })
      );
    }

    if (isChangePass && values.password !== "" && values.confirmPassword !== "") {
      const changePassDataEntry = {
        userId: values.id,
        password: values.password,
        confirmPassword: values.confirmPass,
      };
      requests.push(putRequestToServer({ address: CHANGE_PASSWORD_API, dataEntry: changePassDataEntry }));
    }
    await Promise.all(requests);

    if (requests.length > 0) {
      if (requests.length === 1 && isChangePass) return;
      else return onAfterSubmit();
    }
  };

  return (
    <>
      <Typography variant="h2" mb={5}>
        User Detail
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
                    <Avatar
                      sx={{ width: "15rem", height: "15rem" }}
                      alt={values.userName}
                      src={avatarPath ?? values.image}
                    />

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
                    readOnly={true}
                    disabled={true}
                    id="userName"
                    label="UserName"
                    type="text"
                    value={values.userName}
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

              <Grid item xs={12} sm={4}>
                <Stack spacing={1}>
                  <MainCheckbox
                    name="isActive"
                    checked={values.isActive}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    color="primary"
                    label="Active User"
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} sm={4}>
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

              <Grid item xs={12} sm={4}>
                <Stack spacing={1}>
                  <MainCheckbox
                    value={isChangePass}
                    name="isChangePass"
                    onChange={() => setIsChangePass(!isChangePass)}
                    color="primary"
                    label="Change Password"
                  />
                </Stack>
              </Grid>

              {isChangePass && (
                <>
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
                </>
              )}

              <Grid item xs={12} mt={3}>
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
export default UsersDetail;

UsersDetail.propTypes = {
  dataDetail: PropTypes.object,
  onAfterSubmit: PropTypes.func,
};
