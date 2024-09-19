import PropTypes from "prop-types";

const ChartContainer = ({ children }) => {
  return <div className="chart-row-container">{children}</div>;
};

export default ChartContainer;

ChartContainer.propTypes = {
  children: PropTypes.node,
};
ChartContainer.defaultProps = {};
