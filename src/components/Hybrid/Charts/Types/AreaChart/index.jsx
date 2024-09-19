import { useCallback, forwardRef } from "react";
import PropTypes from "prop-types";
import { X_AXIS_LABELS_OPTIONS, Y_AXIS_LABELS_OPTIONS } from "../../Constants";
import MainChart from "../../MainChart";
import { areaChartDataFormatter, axisDateFormatter } from "../../helper/ChartDataFormatter";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogsFilter } from "~/store/logsList/LogsSlice";
import { convertTime } from "~/helper/dateMoment";

const AreaChart = forwardRef(({ data, height, yAxisFormatter, tickAmount, yAxisMax, toolipContent }, ref) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logsFilter = useSelector((state) => state.logs.logsFilter);

  const ChartOptions = useCallback(
    (options) => ({
      ...options,
      chart: {
        ...options.chart,
        height: height ?? options.chart.height,
        events: {
          click: (event, chartContext, config) => {
            const date = config.globals.categoryLabels[config.dataPointIndex];
            const status = config.config.series[config.seriesIndex].name;
            dispatch(setLogsFilter({ ...logsFilter, startDate: convertTime({ date, format: null }) }));
            navigate(`/logs?status=${status}`);
          },
        },
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 2,
      },
      colors: [theme?.palette?.orange.main, theme?.palette?.yellow.main, theme?.palette?.green.main],
      xaxis: {
        categories: data?.rows,
        tickAmount,
        labels: {
          ...X_AXIS_LABELS_OPTIONS,
          rotate: -50,
          formatter: (item) => axisDateFormatter(item?.[data?.xAxisProperty]),
        },
      },
      ...(toolipContent
        ? {
            tooltip: {
              enabled: true,
              custom: ({ dataPointIndex }) =>
                toolipContent(
                  data?.rows?.[dataPointIndex],
                  data?.cols,
                  data?.xAxisProperty,
                  data?.mainDataProperty,
                  yAxisFormatter
                ),
            },
          }
        : {}),
      ...(data?.rows?.length
        ? {
            yaxis: {
              labels: { ...Y_AXIS_LABELS_OPTIONS, formatter: yAxisFormatter },
              max: yAxisMax,
            },
          }
        : {}),
    }),
    [data?.rows]
  );

  return (
    data?.rows && <MainChart ref={ref} data={areaChartDataFormatter(data)} chartOptions={ChartOptions} type="area" />
  );
});

export default AreaChart;
AreaChart.displayName = "AreaChart";
AreaChart.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  title: PropTypes.string,
  tickAmount: PropTypes.number,
  yAxisMax: PropTypes.number,
  yAxisFormatter: PropTypes.func,
  toolipContent: PropTypes.func,
};
