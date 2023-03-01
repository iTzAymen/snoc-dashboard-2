import { useEffect, useState } from "react";
import CardsContent from "./CardsContent";
import ChartsContent from "./ChartsContent";
import { getCardsData } from "../js/Data";

export default function Overview() {
  const [data, setData] = useState();
  useEffect(() => {
    getCardsData().then((res) => {
      if (res.data) {
        setData(res.data);
      }
    });
  }, []);
  return (
    <div className="flex flex-col">
      <div id="description" className="mb-4">
        <h1 className=" mb-2 text-5xl font-semibold text-zinc-200">Overview</h1>
        <p className="text-lg font-medium text-zinc-400 ">
          This page summarizes key metrics for Points of Sale (POS), including
          the number of POS, best performing offer and city, and total
          transactions. You can track trends and view top performing offers and
          POS. The wilayas section displays transaction data by region.
        </p>
      </div>
      <div id="content">
        <CardsContent cardsData={data} />
        <ChartsContent cardsData={data} />
      </div>
    </div>
  );
}
