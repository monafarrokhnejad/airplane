import ChartCard from "~/components/Hybrid/Charts/ChartCard";
import AreaChart from "~/components/Hybrid/Charts/Types/AreaChart";
import { useStatusByDateChart } from "~/hooks/data/dashboard/useStatusByDateChart";

// ==============================|| CUSTOM  CARD ||============================== //

const ReportsChart = () => {
  const { data: { data } = {} } = useStatusByDateChart();

  const chartData = {
    mainDataProperty: ["error", "inReview", "resolved"],
    cols: [
      {
        id: "logDate",
        label: "logDate",
      },
      {
        id: "error",
        label: "error",
      },
      {
        id: "inReview",
        label: "inReview",
      },
      {
        id: "resolved",
        label: "resolved",
      },
    ],
    rows: data?.data,
    xAxisProperty: "logDate",
  };
  return (
    <ChartCard title="Reports" iconName="icon-production">
      <AreaChart data={chartData} height={390} />
    </ChartCard>
  );
};

export default ReportsChart;
