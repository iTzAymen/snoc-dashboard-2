import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function MyChart({ overviewData }) {
  const chartData = {
    labels: overviewData.city_count.map((val) => val._id),
    datasets: [
      {
        label: "Cities",
        data: overviewData.city_count.map((val) => val.count),
        backgroundColor: ["#52525b"],
        borderColor: ["#e4e4e7"],
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };
  return (
    <div>
      {overviewData && <Bar data={chartData} />}
      {!overviewData && <div>NO DATA</div>}
    </div>
  );
}
