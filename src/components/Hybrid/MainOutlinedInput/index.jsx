import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { FormHelperText, Icon, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

const MainOutlinedInput = ({
  id,
  label,
  type,
  name,
  value,
  onBlur,
  onChange,
  placeholder,
  fullWidth,
  error,
  textError,
  isShowIcon,
  inputProps,
  readOnly,
  disabled,
  onKeyPress,
  sx,
  multiline,
  maxRows,
  minRows,
  inputRef,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Fragment>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        inputProps={{
          ...inputProps,
        }}
        inputRef={inputRef}
        id={id}
        type={!isShowIcon ? type : showPassword ? "text" : "password"}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        fullWidth={fullWidth}
        error={error}
        endAdornment={
          isShowIcon ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="password"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <Icon className={showPassword ? "icon-icon-visibility" : "icon-icon-invisible"} />
              </IconButton>
            </InputAdornment>
          ) : null
        }
        readOnly={readOnly}
        disabled={disabled}
        sx={{ ...sx }}
        multiline={multiline}
        maxRows={maxRows}
        minRows={minRows}
      />
      {textError && (
        <FormHelperText error id={id}>
          {textError}
        </FormHelperText>
      )}
    </Fragment>
  );
};

export default MainOutlinedInput;

MainOutlinedInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  textError: PropTypes.string,
  isShowIcon: PropTypes.bool,
  inputProps: PropTypes.object,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  sx: PropTypes.object,
  multiline: PropTypes.bool,
  maxRows: PropTypes.number,
  minRows: PropTypes.number,
  inputRef: PropTypes.object,
};
MainOutlinedInput.defaultProps = {};
