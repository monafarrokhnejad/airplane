import PropTypes from "prop-types";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ErrorMessage } from "formik";
import { Fragment } from "react";

const MainCheckbox = ({
  label,
  indeterminate,
  defaultChecked,
  disabled,
  checked,
  onChange,
  size,
  color,
  icon,
  checkedIcon,
  required,
  labelPlacement,
  value,
  name,
  onBlur,
}) => {
  return label ? (
    <Fragment>
      <FormControlLabel
        required={required}
        disabled={disabled}
        labelPlacement={labelPlacement}
        value={value}
        control={
          <Checkbox
            defaultChecked={defaultChecked}
            checked={checked}
            onChange={onChange}
            name={name}
            onBlur={onBlur}
            size={size}
            color={color}
            icon={icon}
            checkedIcon={checkedIcon}
            indeterminate={indeterminate}
            inputProps={{ "aria-label": "Checkbox demo/controlled" }}
          />
        }
        label={label}
      />
      <ErrorMessage name={name} component="div" />
    </Fragment>
  ) : (
    <Fragment>
      <Checkbox
        required={required}
        disabled={disabled}
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        size={size}
        color={color}
        icon={icon}
        checkedIcon={checkedIcon}
        indeterminate={indeterminate}
        inputProps={{ "aria-label": "Checkbox demo/controlled" }}
      />
    </Fragment>
  );
};

export default MainCheckbox;
MainCheckbox.propTypes = {
  label: PropTypes.string,
  indeterminate: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  checkedIcon: PropTypes.bool,
  required: PropTypes.bool,
  labelPlacement: PropTypes.string,
  value: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
};
