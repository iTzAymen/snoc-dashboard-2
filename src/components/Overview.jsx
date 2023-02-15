import CardsContent from "./CardsContent";
import { ChartCard, MapCard } from "./ChartCard";
import ChartsContent from "./ChartsContent";

export default function Overview({ overviewData }) {
  return (
    <div className="flex flex-col">
      <div id="description" className="mb-4">
        <h1 className=" mb-2 text-5xl font-semibold text-zinc-200">Overview</h1>
        <p className="text-lg font-medium text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          deserunt rem voluptatem quis quam eveniet inventore in ut nam
          dignissimos?
        </p>
      </div>
      <div id="content">
        <CardsContent overviewData={overviewData} />
        <ChartsContent overviewData={overviewData} />
      </div>
    </div>
  );
}
