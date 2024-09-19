import PropTypes from "prop-types";
import { Button } from "@mui/material";
import StatusComponent from "../StatusComponent";
import { handleIsJiraLink } from "~/views/LogsList/logsGridActions";

const JiraLinkComponent = ({ data, onAfterSubmit }) => {
  const jiraLink = data?.row.jiraLink ? "full" : "empty";

  return (
    <Button onClick={() => handleIsJiraLink({ data, onAfterSubmit })} variant="text">
      <StatusComponent data={jiraLink} />
    </Button>
  );
};

export default JiraLinkComponent;
JiraLinkComponent.propTypes = {
  data: PropTypes.object,
  onAfterSubmit: PropTypes.func,
};
