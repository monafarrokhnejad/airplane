import ActionsComponent from "c/Infrastructures/LogsList/columnsComponents/ActionsComponent";
import GridCheckbox from "c/Infrastructures/LogsList/columnsComponents/GridCheckbox";
import JiraLinkComponent from "c/Infrastructures/LogsList/columnsComponents/JiraLinkComponent";
import StatusComponent from "c/Infrastructures/LogsList/columnsComponents/StatusComponent";
import { convertTime } from "~/helper/dateMoment";
import { handleIsFixed, handleIsSeen } from "./logsGridActions";

export const columnDefs = ({ onRowDoubleClick, onAfterSubmit }) => {
  return [
    {
      field: "actions",
      headerName: "",
      width: 170,
      sortable: false,
      disableColumnMenu: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <ActionsComponent data={params} handleIsSeen={onRowDoubleClick} onAfterSubmit={onAfterSubmit} />
      ),
    },
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "exceptionMessage",
      headerName: "Exception Message",
      width: 220,
    },
    {
      field: "exeptionData",
      headerName: "Exception Data",
      width: 220,
    },
    {
      field: "logDate",
      headerName: "Log Date",
      width: 320,
      renderCell: (params) => convertTime({ date: params.value }),
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 150,
    },
    {
      field: "commentCount",
      headerName: "Comment",
      width: 150,
    },
    {
      field: "isSeen",
      headerName: "Seen",
      width: 110,
      renderCell: (params) => (
        <GridCheckbox
          data={params}
          onAfterSubmit={onAfterSubmit}
          onChange={handleIsSeen}
          checked={params.row.isSeen}
          color="success"
        />
      ),
    },
    {
      field: "userId",
      headerName: "User",
      width: 150,
    },
    {
      field: "isFixed",
      headerName: "Fixed",
      width: 100,
      renderCell: (params) => (
        <GridCheckbox
          data={params}
          onAfterSubmit={onAfterSubmit}
          onChange={handleIsFixed}
          checked={params.row.isFixed}
        />
      ),
    },
    {
      field: "versionNo",
      headerName: "Version Number",
      width: 150,
    },

    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => <StatusComponent data={params.value} />,
    },
    {
      field: "host",
      headerName: "Host",
      width: 220,
    },
    {
      field: "jiraLink",
      headerName: "Jira",
      width: 150,
      renderCell: (params) => <JiraLinkComponent onAfterSubmit={onAfterSubmit} data={params} />,
    },
    {
      field: "application",
      headerName: "Application",
      width: 120,
    },
    {
      field: "claims",
      headerName: "Claims",
      width: 220,
    },
    {
      field: "path",
      headerName: "Path",
      width: 220,
    },
    {
      field: "query",
      headerName: "Query",
      width: 220,
    },
    {
      field: "body",
      headerName: "Body",
      width: 220,
    },
    {
      field: "method",
      headerName: "Method",
      width: 220,
    },
    {
      field: "headers",
      headerName: "Headers",
      width: 220,
    },
    {
      field: "summary",
      headerName: "Summary",
      width: 220,
    },
    {
      field: "requestDetail",
      headerName: "Request Detail",
      width: 220,
    },
    {
      field: "stackTrace",
      headerName: "Stack Trace",
      width: 220,
    },

    {
      field: "userIP",
      headerName: "Ip",
      width: 220,
    },
    {
      field: "priority",
      headerName: "Priority",
      width: 220,
    },
  ];
};
