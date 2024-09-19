import PropTypes from "prop-types";

import { Card, CardContent, CardHeader } from "@mui/material";

const ChartCard = ({ children, title }) => {
  return (
    <Card>
      <CardHeader title={title} titleTypographyProps={{ variant: "h3" }} />
      <CardContent sx={{ mt: 0, pt: 0 }}>{children}</CardContent>
    </Card>
  );
};

export default ChartCard;

ChartCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

ChartCard.defaultProps = {
  title: "title",
};
