import { BarChart, LineChart, PieChart } from "./Charts";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Heatmap from "./Heatmap";
import { useEffect, useState } from "react";
import DateInput from "./DateInput";
import { getChartData } from "../js/Data";
import { HoursData, DaysData, MonthsData } from "../js/DataToChartData";

const dummyChartData = {
  data: [
    { year: 2, count: 12211 },
    { year: 1, count: 26806 },
  ],
};

export function TransactionTrendCard({ className, label, height, children }) {
  const currentYear = new Date().getFullYear();
  const [date, setDate] = useState({
    day: "Days",
    month: "Months",
    year: currentYear,
  });
  const [chartData, setChartData] = useState(MonthsData(dummyChartData.data));
  const updateDate = (dateUpdates) => {
    const newDate = { ...date, ...dateUpdates };
    setDate(newDate);
    getChartData(newDate).then((res) => {
      if (res.data) {
        if (newDate.month == "Months") {
          setChartData(MonthsData(res.data));
        } else if (newDate.day == "Days") {
          setChartData(DaysData(res.data));
        } else {
          setChartData(HoursData(res.data));
        }
      }
    });
  };
  className = className ? className : "";
  return (
    <div
      className={
        className +
        " bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
      }
    >
      <div className="flex justify-between mb-4">
        <h1
          className={
            "text-xl font-semibold truncate text-zinc-200 inline-block"
          }
        >
          {children}
        </h1>
        <DateInput updateDate={updateDate} date={date} />
      </div>
      <LineChart dataset={chartData} label={label} height={height} />
    </div>
  );
}

export function ChartCard({
  dataset,
  type,
  label,
  className,
  height,
  children,
}) {
  if (!dataset) {
    return;
  }

  className = className ? className : "";
  return (
    <div
      className={
        className +
        " bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
      }
    >
      <div className="flex justify-between mb-4">
        <h1
          className={
            "text-xl font-semibold truncate text-zinc-200 inline-block"
          }
        >
          {children}
        </h1>
      </div>
      {type == "bar" && (
        <BarChart dataset={dataset} label={label} height={height} />
      )}
      {type == "line" && (
        <LineChart dataset={dataset} label={label} height={height} />
      )}
      {type == "pie" && (
        <PieChart dataset={dataset} label={label} height={height} />
      )}
    </div>
  );
}

export function MapCard({ city_data, className, height, children }) {
  className = className ? className : "";
  return (
    <div
      className={
        className +
        " bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-dark shadow-lg hover:shadow-xl transition-all"
      }
    >
      <h1 className="text-xl font-semibold mb-2 truncate text-zinc-200">
        {children}
      </h1>
      <Heatmap city_data={city_data} height={height} />
    </div>
  );
}
