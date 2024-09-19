import { Avatar, Icon } from "@mui/material";

export const columnDefs = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "image",
    headerName: "Image",
    width: 110,
    renderCell: (params) => (
      <Avatar src={params?.value} alt={params.value} sx={{ width: "3.5rem", height: "3.5rem" }} />
    ),
  },
  {
    field: "userName",
    headerName: "User",
    width: 150,
  },
  {
    field: "isActive",
    headerName: "Active",
    width: 110,
    renderCell: (params) =>
      params.value ? (
        <Icon className="icon-true" color="success" />
      ) : (
        <Icon className="icon-close-fill" color="error" />
      ),
  },
  {
    field: "isAdmin",
    headerName: "Admin",
    width: 110,
    renderCell: (params) =>
      params.value ? (
        <Icon className="icon-true" color="success" />
      ) : (
        <Icon className="icon-close-fill" color="error" />
      ),
  },
];
