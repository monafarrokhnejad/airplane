import { forwardRef, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { CustomPagination } from "./Pagination";
import { useLocation } from "react-router-dom";
import { getStorage, setStorage } from "~/helper/appManager";
import { PAGE_SETTING } from "~/utilities/storage";

export const MainDataGrid = forwardRef(({ columns, useDataSource, onRowClick, onRowDoubleClick, sx }, ref) => {
  const location = useLocation();
  const pageName = location?.pathname.slice(1);
  const pageSetting = getStorage(PAGE_SETTING) ?? {};
  const pageSettingKeys = Object.keys(pageSetting) ?? [];
  const pageKey = pageSettingKeys?.find((item) => item === pageName);

  const [paginationModel, setPaginationModel] = useState(() => {
    if (pageSetting[pageKey]) {
      return { page: pageSetting[pageKey].Grid.page, pageSize: pageSetting[pageKey].Grid.pageSize };
    } else {
      setStorage({
        key: PAGE_SETTING,
        value: { [pageName]: { Grid: { page: 0, pageSize: 25 } } },
        hasPrev: true,
      });
      return { page: 0, pageSize: 25 };
    }
  });

  const { data: { data } = {}, isLoading, refetch } = useDataSource(paginationModel);
  useImperativeHandle(ref, () => ({
    refetch,
  }));
  const rowCount = data?.metaData?.recordCount ?? 0;
  return (
    <Box position="relative">
      <DataGrid
        initialState={{
          pinnedColumns: { right: ["actions"] },
        }}
        sx={{ ...sx }}
        rows={data?.data ?? []}
        columns={columns}
        onRowClick={onRowClick}
        onRowDoubleClick={onRowDoubleClick}
        disableColumnFilter
        disableColumnMenu
        disableSelectionOnClick
        loading={isLoading}
        hideFooter={rowCount < 1}
        paginationMode="server"
        pageSizeOptions={[5, 10, 25]}
        paginationModel={paginationModel}
        onPaginationModelChange={(e) => {
          setPaginationModel(e);
          setStorage({
            key: PAGE_SETTING,
            value: { [pageName]: { Grid: { page: e.page, pageSize: e.pageSize } } },
            hasPrev: true,
          });
        }}
        rowCount={rowCount}
        labelDisplayedRows={"rowCount"}
        slots={{
          pagination: CustomPagination,
        }}
        slotProps={{
          columnsPanel: {
            disableHideAllButton: true,
            disableShowAllButton: true,
          },
          pagination: {
            labelRowsPerPage: "Display",
          },
        }}
      />
      <Box
        display={{ xs: "none", sm: rowCount < 1 ? "none" : "flex" }}
        alignItems="center"
        justifyContent="space-between"
        position="absolute"
        bottom={20}
        pl={3}
      >
        <Typography variant="h3" mr={3}>
          Showing {paginationModel.pageSize * paginationModel.page + 1} to
          {Math.min(paginationModel.pageSize * (paginationModel.page + 1), rowCount)} of {rowCount} Records
        </Typography>
      </Box>
    </Box>
  );
});

MainDataGrid.displayName = "MainDataGrid";
MainDataGrid.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  useDataSource: PropTypes.func,
  onRowClick: PropTypes.func,
  onRowDoubleClick: PropTypes.func,
  sx: PropTypes.object,
  onMouseLeaveRow: PropTypes.func,
  onMouseEnterRow: PropTypes.func,
};
