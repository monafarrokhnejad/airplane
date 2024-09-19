import PropTypes from "prop-types";

// material-ui
import { Card, CardContent, Icon, Typography } from "@mui/material";
import { Box, alpha } from "@mui/system";

// ==============================|| CUSTOM  CARD ||============================== //

const StatusCard = ({ label, content, icon, color }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="6rem"
            height="6rem"
            borderRadius="50%"
            backgroundColor={alpha(color.main, 0.1)}
            mr={3}
          >
            <Icon fontSize="large" className={`icon-${icon}`} sx={{ color: color.main }} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1">{content}</Typography>
            <Typography variant="h3" sx={{ textTransform: "capitalize" }}>
              {label}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

StatusCard.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.object,
};

export default StatusCard;
