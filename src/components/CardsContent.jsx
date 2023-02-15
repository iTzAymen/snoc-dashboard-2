import Card from "./Card";

export default function CardsContent({ overviewData }) {
  return (
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
  );
}
