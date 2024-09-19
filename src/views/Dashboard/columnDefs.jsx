import JiraLinkComponent from "c/Infrastructures/LogsList/columnsComponents/JiraLinkComponent";
import { convertTime } from "~/helper/dateMoment";

export const columnDefs = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "jiraLink",
    headerName: "Jira",
    width: 150,
    renderCell: (params) => <JiraLinkComponent data={params} />,
  },
  {
    field: "logDate",
    headerName: "Log Date",
    width: 320,
    renderCell: (params) => convertTime({ date: params.value }),
  },
  {
    field: "application",
    headerName: "Application",
    width: 120,
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 150,
  },
];
