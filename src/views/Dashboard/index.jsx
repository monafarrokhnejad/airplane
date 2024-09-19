import { Grid } from "@mui/material";
import TopBar from "~/layouts/TopBar";
import ReportsChart from "c/Infrastructures/DashboardSections/ReportsChart";
import ErrorLogsStatusSection from "c/Infrastructures/DashboardSections/ErrorLogsStatusSection";
import UserListSection from "c/Infrastructures/DashboardSections/UserListSection";
import SimpleBar from "simplebar-react";
import ToolsBar from "./ToolsBar";
import StatusChart from "c/Infrastructures/DashboardSections/StatusChart";
import LogsListSection from "c/Infrastructures/DashboardSections/LogsListSection";
import { useUserInfo } from "~/hooks/data/useUserInfo";

const Dashboard = () => {
  const { data: { data } = {} } = useUserInfo();
  const hasPermission = data?.data?.isAdmin;

  return (
    <>
      <TopBar title="Dashboard" component={<ToolsBar />} />
      <SimpleBar style={{ height: "calc(100vh - 11rem)" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={7}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <StatusChart />
              </Grid>
              <Grid item xs={12}>
                <ReportsChart />
              </Grid>
              <Grid item xs={12}>
                <LogsListSection />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ErrorLogsStatusSection />
              </Grid>
              {hasPermission && (
                <Grid item xs={12}>
                  <UserListSection />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </SimpleBar>
    </>
  );
};

export default Dashboard;
