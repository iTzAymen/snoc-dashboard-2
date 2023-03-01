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
      </div>
      <div id="content">
        <CardsContent cardsData={data} />
        <ChartsContent cardsData={data} />
      </div>
    </div>
  );
}
