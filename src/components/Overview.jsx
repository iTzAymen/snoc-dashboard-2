import Card from "./Card";
import MyChart from "./MyChart";
import { ChartCard, MapCard } from "./ChartCard";

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
        <div
          id="cards"
          className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4"
        >
          <Card title="Total Transactions">
            {overviewData ? overviewData.total_count[0].count : 0}
          </Card>
          <Card title="Best Offer">
            {overviewData ? overviewData.offer_count[0]._id : 0}
          </Card>
          <Card title="Best City">
            {overviewData ? overviewData.city_count[0]._id : 0}
          </Card>
          <Card title="Total Refused">
            {overviewData ? overviewData.refused_count[0].count : 0}
          </Card>
        </div>
        <div id="charts" className="grid w-fu grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard overviewData={overviewData}>Cities</ChartCard>
          <ChartCard overviewData={overviewData}>Cities</ChartCard>
          <ChartCard overviewData={overviewData}>Cities</ChartCard>
          <MapCard overviewData={overviewData}>Cities</MapCard>
        </div>
      </div>
    </div>
  );
}
