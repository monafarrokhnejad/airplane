import { useTheme } from "@emotion/react";

import { Grid } from "@mui/material";

import StatusCard from "./StatusCard";
import { useStatusChart } from "~/hooks/data/dashboard/useStatusChart";
import { useNavigate } from "react-router-dom";
import { statusCode } from "~/utilities/statusCode";

const gridCol = {
  1: 12,
  2: 4.5,
  3: 3,
};

const StatusChart = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { data: { data } = {}, isLoading } = useStatusChart();
  const mainData = data?.data[0] ?? {};

  if (isLoading) return null;
  return (
    <Grid container spacing={2} columns={9}>
      {Object.keys(mainData)?.map((item) => (
        <Grid
          key={item}
          item
          xs={12}
          md={12}
          lg={gridCol[Object.keys(mainData)?.length]}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/logs?status=${item}`)}
        >
          <StatusCard
            label={statusCode[item].icon}
            content={`+ ${mainData[item]}`}
            icon={statusCode[item].icon}
            color={theme.palette[statusCode[item].color]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatusChart;
