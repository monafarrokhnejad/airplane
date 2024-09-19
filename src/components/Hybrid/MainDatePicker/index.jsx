import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { InputLabel } from "@mui/material";

const MainDatePicker = ({
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
      <DatePicker
        value={value ? dayjs(value) : null}
        onChange={(e) => onChange(e.format())}
        disabled={disabled}
        disablePast={disablePast}
        disableFuture={disableFuture}
        minDate={minDate ? dayjs(minDate) : null}
        maxDate={maxDate ? dayjs(maxDate) : null}
        onClose={onClose}
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

export default MainDatePicker;

MainDatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  sx: PropTypes.object,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  maxDate: PropTypes.string,
  minDate: PropTypes.string,
};
MainDatePicker.defaultProps = {};
