import { useEffect, useState } from "react";
import { CityData, OfferData } from "../js/DataToChartData";
import { ChartCard, MapCard, TransactionTrendCard } from "./ChartCard";
import PosCard from "./PosCard";

export default function ChartsContent({ cardsData }) {
  const offer_data = cardsData ? OfferData(cardsData[3]) : null;
  const city_data = cardsData ? CityData(cardsData[2]) : null;

  const [window_width, setWindow_width] = useState(
    Math.max(700, Math.min(350, 1.4 * window.innerWidth - 280))
  );

  useEffect(() => {
    function handle_resize() {
      setWindow_width(
        Math.min(700, Math.max(350, 1.4 * window.innerWidth - 280))
      );
    }

    window.addEventListener("resize", handle_resize);
    return () => window.removeEventListener("resize", handle_resize);
  }, []);

  return (
    <div
      id="charts"
      className="grid w-full grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4"
      style={{ gridTemplateRows: "auto 4rem auto" }}
    >
      <TransactionTrendCard
        className="col-span-2"
        label="transactions"
        height={350}
      >
        Transactions trend
      </TransactionTrendCard>
      <ChartCard
        dataset={offer_data}
        className="row-span-2"
        type="pie"
        label="offer"
        height={350}
      >
        Offers
      </ChartCard>
      <MapCard
        className="col-span-2 row-span-3"
        city_data={city_data}
        height={window_width}
      >
        Wilayas
      </MapCard>
      <PosCard className="col-span-1 row-span-2">Points of Sale</PosCard>
    </div>
  );
}
