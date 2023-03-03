import Card from "./Card";
import { Spinner } from "../assets/icons";
export default function CardsContent({ cardsData }) {
  if (!cardsData) {
    return (
      <div
        id="cards"
        className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4"
      >
        <Card title="Total Transactions" color="bg-[#36a2eb]">
          <Spinner className="text-left " size="h-[27px]" />
        </Card>
        <Card title="Best Offer" color="bg-[#ff6384]">
          <Spinner className="text-left" size="h-[27px]" />
        </Card>
        <Card title="Best City" color="bg-[#ffcd56]">
          <Spinner className="text-left" size="h-[27px]" />
        </Card>
        <Card title="Total POS" color="bg-[#9966ff]">
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
      <Card title="Total Transactions" color="bg-[#36a2eb]">
        {cardsData[4].count}
      </Card>
      <Card title="Best Offer" color="bg-[#ff6384]">
        {cardsData[1].produit}
      </Card>
      <Card title="Best City" color="bg-[#ffcd56]">
        {cardsData[0].wilaya}
      </Card>
      <Card title="Total POS" color="bg-[#9966ff]">
        {cardsData[5].count}
      </Card>
    </div>
  );
}
