import MyChart from "./MyChart";
import Heatmap from "./Heatmap";
import { useEffect, useState } from "react";

export function ChartCard({ overviewData, children }) {
  if (!overviewData) {
    return;
  }
  return (
    <div className="bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <h1 className="text-xl font-semibold mb-2 truncate text-zinc-200">
        {children}
      </h1>
      <MyChart overviewData={overviewData} />
    </div>
  );
}

export function MapCard({ overviewData, children }) {
  if (!overviewData) {
    return;
  }
  return (
    <div className="bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <h1 className="text-xl font-semibold mb-2 truncate text-zinc-200">
        {children}
      </h1>
      <Heatmap overviewData={overviewData} />
    </div>
  );
}
