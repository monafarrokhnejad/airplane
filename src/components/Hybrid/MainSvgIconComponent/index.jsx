import { useTheme } from "@mui/material";
import { PropTypes } from "prop-types";

const SvgIconComponent = ({ icon, size }) => {
  const theme = useTheme();
  return (
    <img
      style={{
        width: size ?? theme.customGaps.main,
        height: size ?? theme.customGaps.main,
      }}
      src={icon}
      alt="SVG-image"
    />
  );
};

export default SvgIconComponent;

SvgIconComponent.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
};
