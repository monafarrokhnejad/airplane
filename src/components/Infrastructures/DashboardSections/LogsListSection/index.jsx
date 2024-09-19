import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { MainDataGrid } from "c/Hybrid/MainDataGrid";
import { useNavigate } from "react-router-dom";
import { useLogsList } from "~/hooks/data/useLogsList";
import { columnDefs } from "~/views/Dashboard/columnDefs";

const LogsListSection = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader
        title="Recent Jira"
        titleTypographyProps={{ variant: "h3" }}
        action={<Button onClick={() => navigate("/logs?hasJiraLink=1")}>See More</Button>}
      />
      <CardContent sx={{ mt: 0, pt: 0 }}>
        <MainDataGrid columns={columnDefs} useDataSource={useLogsList} sx={{ maxHeight: "48rem", boxShadow: "none" }} />
      </CardContent>
    </Card>
  );
};

export default LogsListSection;
