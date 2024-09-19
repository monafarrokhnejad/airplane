import { PropTypes } from "prop-types";
import happyFace from "../../assets/images/happyFace.png";
import sadFace from "../../assets/images/sadFace.png";
import { Box } from "@mui/material";

const AuthImageBox = ({ isLogin }) => {
  return <Box>{isLogin ? <img src={happyFace} alt="image" /> : <img src={sadFace} alt="image" />}</Box>;
};

export default AuthImageBox;

AuthImageBox.propTypes = {
  isLogin: PropTypes.bool,
};
