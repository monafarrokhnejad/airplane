import PropTypes from "prop-types";
import ImageLogo from "../../../assets/SVG/Logo.svg";
import MobImageLogo from "../../../assets/SVG/Union.svg";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = ({ isMiniSize, width }) => {
  return (
    <Link to="/">
      <Box mb={1} height="4rem">
        {isMiniSize ? (
          <img src={MobImageLogo} alt="icon-logo" width={width} />
        ) : (
          <img src={ImageLogo} alt="icon-logo" width={width} />
        )}
      </Box>
    </Link>
  );
};

export default Logo;
Logo.propTypes = {
  isMiniSize: PropTypes.bool,
  width: PropTypes.number,
};
