import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";

export function BarChart({ dataset, label, height }) {
  if (!dataset) {
    return;
  }

  const chartData = {
    labels: dataset.map((val) => val._id),
    datasets: [
      {
        label: label,
        data: dataset.map((val) => val.count),
        backgroundColor: ["#52525b"],
        borderColor: ["#e4e4e7"],
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false, position: "bottom", align: "start" },
    },
  };

  return (
    <div>
      <Bar data={chartData} height={height} options={options} />
    </div>
  );
}

export function PieChart({ dataset, label, height }) {
  if (!dataset) {
    return;
  }

  const chartData = {
    labels: dataset.map((val) => val._id),
    datasets: [
      {
        label: label,
        data: dataset.map((val) => val.count),
        // backgroundColor: [
        //   "#881337",
        //   "#9f1239",
        //   "#be123c",
        //   "#e11d48",
        //   "#f43f5e",
        //   "#fb7185",
        // ],
        // borderColor: ["#e4e4e7"],
        borderWidth: 2,
        borderRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false, position: "bottom", align: "start" },
    },
  };

  const canvasRef = useRef(null);
  const [legend, setLegend] = useState(null);

  useEffect(() => {
    if (!canvasRef) {
      return;
    }

    const data = canvasRef.current.legend.legendItems;
    setLegend(
      <div className="grid grid-cols-2 gap-2 mt-auto">
        {data.map((e, idx) => (
          <div key={idx} className="flex items-center col-span-1 h-8">
            <div
              className="h-full aspect-square rounded-md border-2"
              style={{ backgroundColor: e.fillStyle, stroke: e.strokeStyle }}
            ></div>
            <p className="text-white pl-3 truncate w-full">{e.text}</p>
          </div>
        ))}
      </div>
    );
  }, [canvasRef]);
  return (
    <div>
      <div className="mb-10">
        <Doughnut
          ref={canvasRef}
          data={chartData}
          height={height}
          options={options}
        />
      </div>
      {legend}
    </div>
  );
}

export function LineChart({ dataset, label, height }) {
  if (!dataset) {
    return;
  }

  const chartData = {
    labels: dataset.map((val) => val._id),
    datasets: [
      {
        label: label,
        data: dataset.map((val) => val.count),
        fill: true,
        backgroundColor: ["rgba(190, 18, 60, 0.2)"],
        borderColor: ["#be123c"],
        borderWidth: 2,
        borderRadius: 6,
        tension: 0,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false, position: "bottom", align: "start" },
    },
  };

  return (
    <div className="my-auto">
      <Line data={chartData} height={height} options={options} />
    </div>
  );
}
