import { BarChart, LineChart, PieChart } from "./Charts";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Heatmap from "./Heatmap";
import { useEffect, useState } from "react";
import DateInput from "./DateInput";

export function ChartCard({
  dataset,
  type,
  label,
  className,
  height,
  dated,
  children,
}) {
  if (!dataset) {
    return;
  }
  const currentYear = new Date().getFullYear();
  const [date, setDate] = useState({
    day: "all",
    month: "all",
    year: currentYear,
  });
  const updateDate = (dateUpdates) => {
    setDate({ ...date, ...dateUpdates });
    // fetch for dataset here
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
        {dated ? <DateInput updateDate={updateDate} /> : null}
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

export function MapCard({ overviewData, className, height, children }) {
  if (!overviewData) {
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
      <h1 className="text-xl font-semibold mb-2 truncate text-zinc-200">
        {children}
      </h1>
      <Heatmap overviewData={overviewData} height={height} />
    </div>
  );
}
