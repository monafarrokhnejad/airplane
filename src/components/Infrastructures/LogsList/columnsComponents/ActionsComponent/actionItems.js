import { handleIsFixed, handleIsJiraLink, handleIsIgnore } from "~/views/LogsList/logsGridActions";

export const actionsItems = ({ data, handleIsSeen, onAfterSubmit, theme }) => {
  return [
    {
      id: 1,
      onClick: () => handleIsSeen(data),
      color: theme.palette.yellow,
      icon: "icon-icon-search",
      hasConfirm: false,
    },
    {
      id: 2,
      onClick: () => handleIsFixed({ data, rowId: data.row.id, onAfterSubmit }),
      color: theme.palette.green,
      icon: "icon-icon-verify",
      hasConfirm: true,
      message: "Do you want to mark the issue as Fixed?",
    },
    {
      id: 3,
      onClick: () => handleIsJiraLink({ data, onAfterSubmit }),
      color: theme.palette.blue,
      icon: "icon-icon-jira",
      hasConfirm: true,
      message: "Do you want to create a Jira link?",
    },
    {
      id: 4,
      onClick: () => handleIsIgnore({ rowId: data.row.id, onAfterSubmit }),
      color: theme.palette.red,
      icon: "icon-icon-negative-fill",
      hasConfirm: true,
      message: "Do you want to mark the issue as Ignore?",
    },
  ];
};
