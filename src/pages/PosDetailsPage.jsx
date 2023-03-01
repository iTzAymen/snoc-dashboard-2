import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TransactionTrendCard } from "../components/ChartCard";
import { getPosById, getPosChartData } from "../js/Data";
import TransactionsSearchList from "../components/TransactionsSearchList";
import { Spinner } from "../assets/icons";

let page = 0;
export default function PosDetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [debounce, setDebounce] = useState(false);

  const getPage = () => {
    if (debounce == true) {
      return;
    }
    setDebounce(true);
    getPosById(id, page * 10, (page + 1) * 10).then((res) => {
      page++;
      setDebounce(false);
      setTransactions([...transactions, ...res.pos_transactions]);
    });
  };

  useEffect(() => {
    getPosById(id, 0, 10).then((res) => {
      page = 1;
      setData(res);
      setTransactions(res.pos_transactions);
    });
  }, []);

  return (
    <main className=" md:container p-4 md:mt-4 min-screen-height">
      <div className="flex flex-col">
        <div id="description" className="mb-4">
          <h1 className=" mb-2 text-5xl font-semibold text-zinc-200">
            POS Details
          </h1>
        </div>
        <div id="content">
          <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
            <div className="col-span-1 flex flex-col bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all thin-zinc-border">
              <h1 className="text-xl font-semibold truncate text-zinc-200 inline-block mb-2 pb-2 border-b border-zinc-800">
                POS Information
              </h1>
              <div className="w-full grow flex flex-col">
                {data &&
                  data.pos_info.map((key, idx) => {
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
                {!data && <Spinner size="h-[4rem]" />}
              </div>
            </div>
            <TransactionTrendCard
              posid={id}
              className="col-span-1 lg:col-span-2"
              label="transactions"
              height={350}
            >
              Transactions trend
            </TransactionTrendCard>
            <div className="col-span-1 lg:col-span-3 bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all thin-zinc-border">
              <h1 className="text-xl font-semibold truncate text-zinc-200 inline-block pb-2 border-b border-zinc-800 w-full">
                Transactions History
              </h1>
              {transactions && <TransactionsSearchList data={transactions} />}
              {!transactions && <Spinner className="mb-3 mx-auto" />}
              <button
                onClick={getPage}
                className="w-full bg-zinc-700 border-zinc-600 hover:bg-rose-900 hover:border-rose-500 hover:-translate-y-1 border rounded-lg py-2 px-2 cursor-pointer transition-all"
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
