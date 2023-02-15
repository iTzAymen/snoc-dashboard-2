import { ChartCard, MapCard } from "./ChartCard";
import RecentTransactions from "./RecentTransactions";
export default function ChartsContent({ overviewData }) {
  if (!overviewData) {
    return;
  }

  const transactions_count = overviewData.transactions_count.sort(
    (item1, item2) => {
      if (item1._id < item2._id) {
        return -1;
      }
      return 1;
    }
  );

  return (
    <div
      id="charts"
      className="grid w-full grid-cols-1 lg:grid-cols-3 lg:gap-4"
    >
      <ChartCard
        className="col-span-2"
        dataset={transactions_count}
        type="line"
        label="transactions"
        dated={true}
        height={350}
      >
        Transactions trend
      </ChartCard>
      <ChartCard
        dataset={overviewData.offer_count}
        className="row-span-2"
        type="pie"
        label="offer"
        height={350}
      >
        Offers
      </ChartCard>
      <MapCard
        className="col-span-2 row-span-3"
        overviewData={overviewData}
        height={700}
      >
        Wilayas
      </MapCard>
      <RecentTransactions className="col-span-1 row-span-2 bg-zinc-900">
        Recent Transactions
      </RecentTransactions>
    </div>
  );
}
