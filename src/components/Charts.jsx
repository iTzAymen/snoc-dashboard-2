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
        // backgroundColor: ["#52525b"],
        // borderColor: ["#e4e4e7"],
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

  const canvasRef = useRef(null);
  const [legend, setLegend] = useState(null);

  useEffect(() => {
    if (!canvasRef) {
      return;
    }

    const data = canvasRef.current.legend.legendItems;
    console.log(data);
    setLegend(
      <div className="grid grid-cols-2 gap-2 mt-14">
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
    <div className="">
      <div>
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

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function LineChart({ dataset, label, height }) {
  if (!dataset) {
    return;
  }

  const current_month = new Date().getMonth();

  let temp = [];
  for (let i = 0; i < 12; i++) {
    const month = current_month + i + 2;
    temp[i] = {
      _id: (month + 12) % 12,
      count: 0,
    };
  }

  temp = temp.map((item) => {
    const actual = dataset.find((item_1) => {
      return item_1._id == item._id;
    });

    if (actual) {
      return actual;
    }
    return item;
  });

  const chartData = {
    labels: temp.map((val) => months[val._id]),
    datasets: [
      {
        label: label,
        data: temp.map((val) => val.count),
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
    <div>
      <Line data={chartData} height={height} options={options} />
    </div>
  );
}
