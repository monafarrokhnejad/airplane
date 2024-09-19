import ChartCard from "c/Hybrid/Charts/ChartCard";
import BarChart from "c/Hybrid/Charts/Types/BarChart";
import { useStatusByCustomerChart } from "~/hooks/data/dashboard/useStatusByCustomerChart";

// ==============================|| CUSTOM  CARD ||============================== //

const ErrorLogsStatusSection = () => {
  const { data: { data } = {} } = useStatusByCustomerChart();

  const chartData = {
    mainDataProperty: ["error", "inReview", "resolved"],
    cols: [
      {
        id: "customer",
        label: "customer",
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
    rows: data?.data ?? [],
    xAxisProperty: "customer",
  };
  return (
    <ChartCard title="Customer Error Logs Status" iconName="icon-production">
      <BarChart data={chartData} height={670} />
    </ChartCard>
  );
};

export default ErrorLogsStatusSection;
