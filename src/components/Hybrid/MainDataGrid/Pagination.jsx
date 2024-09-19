import PropTypes from "prop-types";
import {
  GridPagination,
  gridPageSelector,
  gridPageSizeSelector,
  gridRowCountSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import MuiPagination from "@mui/material/Pagination";

function Pagination({ onPageChange, className }) {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
  const rowCount = useGridSelector(apiRef, gridRowCountSelector);

  return (
    <MuiPagination
      color="primary"
      shape="rounded"
      className={className}
      count={Math.ceil(rowCount / pageSize)}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
    />
  );
}

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  className: PropTypes.string,
};

export function CustomPagination(props) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}
