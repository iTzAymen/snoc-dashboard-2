import { BarChart, LineChart, PieChart } from "./Charts";
import Heatmap from "./Heatmap";
import { useEffect, useState } from "react";
import DateInput from "./DateInput";
import { getChartData, getPosChartData } from "../js/Data";
import {
  HoursData,
  DaysData,
  MonthsData,
  PosHoursData,
  PosDaysData,
  PosMonthsData,
} from "../js/DataToChartData";
import { Spinner } from "../assets/icons";

export function TransactionTrendCard({
  posid,
  className,
  label,
  height,
  children,
}) {
  const currentYear = new Date().getFullYear();
  const [date, setDate] = useState({
    day: "Days",
    month: "Months",
    year: currentYear,
  });
  const [chartData, setChartData] = useState(MonthsData([]));
  const updateDate = (dateUpdates) => {
    const newDate = { ...date, ...dateUpdates };
    setDate(newDate);
    if (posid) {
      getPosChartData(posid, newDate).then((res) => {
        if (res.data) {
          if (newDate.month == "Months") {
            setChartData(PosMonthsData(res.data));
          } else if (newDate.day == "Days") {
            setChartData(PosDaysData(res.data));
          } else {
            setChartData(PosHoursData(res.data));
          }
        }
      });
    } else {
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
    }
  };
  useEffect(() => {
    updateDate({
      day: "Days",
      month: "Months",
      year: currentYear,
    });
  }, []);
  className = className ? className : "";
  return (
    <div
      className={
        className +
        " flex flex-col bg-white dark:bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all thin-zinc-border"
      }
    >
      <div className="flex flex-col sm:flex-row justify-between mb-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
        <h1
          className={
            "text-xl font-semibold truncate text-dark dark:text-zinc-200 inline-block"
          }
        >
          {children}
        </h1>
        <div className="mt-2 sm:mt-0">
          <DateInput updateDate={updateDate} date={date} />
        </div>
      </div>
      {chartData && (
        <LineChart dataset={chartData} label={label} height={height} />
      )}
      {!chartData && <Spinner />}
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
  className = className ? className : "";
  return (
    <div
      className={
        className +
        " flex flex-col bg-white dark:bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all thin-zinc-border"
      }
    >
      <div className="flex justify-between mb-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
        <h1
          className={
            "text-xl font-semibold truncate text-dark dark:text-zinc-200 inline-block"
          }
        >
          {children}
        </h1>
      </div>
      {dataset && type == "bar" && (
        <BarChart dataset={dataset} label={label} height={height} />
      )}
      {dataset && type == "line" && (
        <LineChart dataset={dataset} label={label} height={height} />
      )}
      {dataset && type == "pie" && (
        <PieChart dataset={dataset} label={label} height={height} />
      )}
      {!dataset && <Spinner size="h-[4rem]" />}
    </div>
  );
}

export function MapCard({ city_data, className, height, children }) {
  className = className ? className : "";
  return (
    <div
      className={
        className +
        " flex flex-col bg-white dark:bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all thin-zinc-border"
      }
    >
      <h1 className="text-xl font-semibold truncate text-dark dark:text-zinc-200 mb-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
        {children}
      </h1>
      {city_data && <Heatmap city_data={city_data} height={height} />}
      {!city_data && (
        <div className={`flex grow`} style={{ height: height }}>
          <Spinner size="h-[4rem]" />
        </div>
      )}
    </div>
  );
}
