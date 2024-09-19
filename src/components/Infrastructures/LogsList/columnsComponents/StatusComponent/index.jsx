import PropTypes from "prop-types";
import { Box, Icon, Typography, alpha, useTheme } from "@mui/material";
import { statusCode } from "~/utilities/statusCode";

const StatusComponent = ({ data }) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor={alpha(theme.palette[statusCode[data].color].main, 0.15)}
      borderRadius="1rem"
      padding="0.1rem 0.9rem 0.1rem 0.4rem"
    >
      <Icon
        fontSize="small"
        className={`icon-${statusCode[data].icon}`}
        sx={{ color: theme.palette[statusCode[data].color].main }}
      />
      <Typography variant="body1" color={theme.palette[statusCode[data].color].main} pl={0.5}>
        {statusCode[data].label}
      </Typography>
    </Box>
  );
};

export default StatusComponent;
StatusComponent.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
