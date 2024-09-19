import { getRequestFromServer, putRequestToServer } from "~/services";
import { JIRA_BASEURL } from "~/services/baseUrl";
import { GET_JIRA_LINK_API, IS_LOG_FIXED_API, IS_LOG_SEEN_API, LOG_STATUS_UPDATE_API } from "~/utilities/api";

export const handleIsJiraLink = async ({ data, onAfterSubmit }) => {
  const rowId = data.row.id;
  const jiraLink = data?.row.jiraLink;
  if (!jiraLink) {
    const result = await getRequestFromServer({
      address: `${GET_JIRA_LINK_API}/${rowId}`,
    });
    const link = result?.data?.data?.jiraLink;
    if (link) {
      const mainLink = JIRA_BASEURL + link;
      window.open(mainLink, "_blank");
      jiraLink.focus();
      onAfterSubmit?.();
    }
  } else {
    const jiraIssueLink = JIRA_BASEURL + jiraLink;
    window.open(jiraIssueLink, "_blank");
    jiraLink.focus();
  }
};

export const handleIsFixed = async ({ data, rowId, onAfterSubmit }) => {
  data.row.isFixed = !data.row.isFixed;
  data.api.updateRows([{ id: rowId, changes: data.row }]);
  await putRequestToServer({
    address: `${IS_LOG_FIXED_API}/${rowId}`,
    dataEntry: { isFixed: data.row.isFixed },
  });
  onAfterSubmit?.();
};

export const handleIsSeen = async ({ data, rowId, onAfterSubmit }) => {
  data.row.isSeen = !data.row.isSeen;
  data.api.updateRows([{ id: rowId, changes: data.row }]);
  await putRequestToServer({
    address: `${IS_LOG_SEEN_API}/${rowId}`,
    dataEntry: { isSeen: data.row.isSeen },
  });
  onAfterSubmit?.();
};

export const handleIsIgnore = async ({ rowId, onAfterSubmit }) => {
  await putRequestToServer({
    address: `${LOG_STATUS_UPDATE_API}/${rowId}`,
    dataEntry: { statusId: 4 },
  });
  onAfterSubmit?.();
};
