import { forwardRef } from "react";
import PropTypes from "prop-types";
import { X_AXIS_LABELS_OPTIONS, Y_AXIS_LABELS_OPTIONS } from "../../Constants";
import MainChart from "../../MainChart";
import { useTheme } from "@mui/material";
import { areaChartDataFormatter, categorySection } from "../../helper/ChartDataFormatter";
import { useNavigate } from "react-router-dom";

const BarChart = forwardRef(({ data, height }, ref) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const ChartOptions = (options) => ({
    ...options,
    chart: {
      ...options.chart,
      stacked: true,
      height: height ?? options.chart.height,
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const customer = config.w.globals.labels[config.dataPointIndex];
          const status = config.w.config.series[config.seriesIndex].name;
          navigate(`/logs?status=${status}&customer=${customer}`);
        },
      },
    },
    colors: [theme?.palette?.orange.main, theme?.palette?.yellow.main, theme?.palette?.green.main],
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              color: theme.palette.common.black,
            },
          },
        },
      },
    },
    xaxis: {
      categories: categorySection?.(data),
      labels: X_AXIS_LABELS_OPTIONS,
    },
    yaxis: {
      labels: Y_AXIS_LABELS_OPTIONS,
    },
  });
  return <MainChart ref={ref} data={areaChartDataFormatter(data)} chartOptions={ChartOptions} type="bar" />;
});

export default BarChart;

BarChart.displayName = "BarChart";

BarChart.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
};
