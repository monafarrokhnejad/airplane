import PropTypes from "prop-types";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { InputLabel } from "@mui/material";

const MainDateTimePicker = ({
  label,
  value,
  onChange,
  sx,
  onClose,
  fullWidth,
  disabled,
  disablePast,
  disableFuture,
  maxDate,
  minDate,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <DateTimePicker
        value={value ? dayjs(value) : null}
        onChange={onChange}
        disabled={disabled}
        disablePast={disablePast}
        disableFuture={disableFuture}
        minDate={minDate ? dayjs(minDate) : null}
        maxDate={maxDate ? dayjs(maxDate) : null}
        onClose={onClose}
        ampm={false}
        closeOnSelect={true}
        sx={{
          width: fullWidth ? "100%" : "auto",
          "& .MuiOutlinedInput-root": {
            ...sx,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default MainDateTimePicker;

MainDateTimePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  sx: PropTypes.object,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  maxDate: PropTypes.object,
  minDate: PropTypes.object,
};
MainDateTimePicker.defaultProps = {};
