import Card from "./Card";
import { Spinner } from "../assets/icons";
export default function CardsContent({ cardsData }) {
  if (!cardsData) {
    return (
      <div
        id="cards"
        className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4"
      >
        <Card title="Total Transactions">
          <Spinner className="text-left " size="h-[27px]" />
        </Card>
        <Card title="Best Offer">
          <Spinner className="text-left" size="h-[27px]" />
        </Card>
        <Card title="Best City">
          <Spinner className="text-left" size="h-[27px]" />
        </Card>
        <Card title="Total POS">
          <Spinner className="text-left" size="h-[27px]" />
        </Card>
      </div>
    );
  }
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
