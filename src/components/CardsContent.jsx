import Card from "./Card";

export default function CardsContent({ cardsData }) {
  return (
    <div
      id="cards"
      className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4"
    >
      <Card title="Total Transactions">{cardsData[4].count}</Card>
      <Card title="Best Offer">{cardsData[1].produit}</Card>
      <Card title="Best City">{cardsData[0].wilaya}</Card>
      <Card title="Total POS">{cardsData[5].count}</Card>
    </div>
  );
}
