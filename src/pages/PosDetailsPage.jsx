import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChartCard } from "../components/ChartCard";
import { getPosById } from "../js/Data";
import TransactionsSearchList from "../components/TransactionsSearchList";

export default function PosDetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    getPosById(id).then((res) => {
      setData(res);
    });
  }, []);

  if (!data) {
    return;
  }

  return (
    <main className=" md:container p-4 md:mt-4">
      <div className="flex flex-col">
        <div id="description" className="mb-4">
          <h1 className=" mb-2 text-5xl font-semibold text-zinc-200">
            POS Details
          </h1>
          <p className="text-lg font-medium text-zinc-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            deserunt rem voluptatem quis quam eveniet inventore in ut nam
            dignissimos?
          </p>
        </div>
        <div id="content">
          <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
            <div className="flex flex-col bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h1 className="text-xl font-semibold truncate text-zinc-200 inline-block">
                Information
              </h1>
              <div className="w-full grow flex flex-col py-4">
                {data.pos_info.map((key, idx) => {
                  if (key == undefined) {
                    return;
                  }
                  return (
                    <div
                      className="grid grid-cols-2 h-10 border-b border-zinc-800 p-2 mb-2"
                      key={idx}
                    >
                      <h1 className="font-bold">{key[0]}</h1>
                      <p>{key[1]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* {transactions && (
              <ChartCard
                className="col-span-2"
                dataset={transactions}
                type="line"
                label="pos transactions"
                dated={true}
                height={350}
              >
                Pos Transactions
              </ChartCard>
            )} */}
            <div className="col-span-3 bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h1 className="text-xl font-semibold truncate text-zinc-200 inline-block">
                Transactions History
              </h1>
              <TransactionsSearchList data={data.pos_transactions} />
              <button className="w-full bg-zinc-700 border-zinc-600 hover:bg-rose-900 hover:border-rose-500 hover:-translate-y-1 border rounded-lg py-2 px-2 cursor-pointer transition-all">
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
