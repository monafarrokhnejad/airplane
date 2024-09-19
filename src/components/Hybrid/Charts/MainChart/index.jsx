import { useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

const MainChart = forwardRef(({ data, chartOptions, type, title, className }, ref) => {
  const options = useMemo(() => {
    const defaultOptions = {
      chart: {
        height: 320,
        type,
        borderRadius: 10,
        toolbar: { show: false },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: title,
        style: {
          fontWeight: 600,
          fontSize: 14,
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
    };
    return chartOptions ? chartOptions?.(defaultOptions) : defaultOptions;
  }, [chartOptions]);

  return (
    <div className={className}>
      <ReactApexChart
        className={`${type}-chart`}
        ref={ref}
        options={options}
        height={options.chart.height}
        series={data}
        type={type}
      />
    </div>
  );
});

export default MainChart;

MainChart.displayName = "MainChart";

MainChart.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  chartOptions: PropTypes.func,
  onClick: PropTypes.func,
  data: PropTypes.array,
  title: PropTypes.string,
};
