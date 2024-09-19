import MainCheckbox from "c/Hybrid/MainCheckbox";
import PropTypes from "prop-types";

const GridCheckbox = ({ data, onAfterSubmit, onChange, color, checked }) => {
  const rowId = data.row.id;

  return <MainCheckbox color={color} onChange={() => onChange({ data, rowId, onAfterSubmit })} checked={checked} />;
};

export default GridCheckbox;
GridCheckbox.propTypes = {
  data: PropTypes.object,
  onAfterSubmit: PropTypes.func,
  onChange: PropTypes.func,
  color: PropTypes.string,
  checked: PropTypes.bool,
};
GridCheckbox.defaultValues = {
  color: "primary",
};
