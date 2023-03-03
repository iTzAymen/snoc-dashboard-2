import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTransactionById } from "../js/Data";
import { Spinner, UserMini } from "../assets/icons";

export default function TransactionDetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    getTransactionById(id).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <main className=" md:container p-4 md:mt-4 min-screen-height">
      <div className="flex flex-col">
        <div id="description" className="mb-4">
          <h1 className=" mb-2 text-5xl font-semibold text-dark dark:text-zinc-200">
            Transaction Details
          </h1>
        </div>
        <div id="content">
          <div className="w-full gap-y-4 lg:gap-4">
            <div className="flex flex-col bg-white dark:bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all thin-zinc-border">
              <h1 className="text-xl font-semibold truncate text-dark dark:text-zinc-200 inline-block mb-2 pb-2 border-b border-zinc-200 dark:border-zinc-800 w-full">
                Information
              </h1>
              <div className="w-full grow flex flex-col">
                {data &&
                  data.map((key, idx) => {
                    if (key[0] == "code_pdv") {
                      return (
                        <div
                          className="grid grid-cols-2 h-10 border-b border-zinc-200 dark:border-zinc-800 p-2 mb-2"
                          key={idx}
                        >
                          <h1 className="font-bold">{key[0]}</h1>
                          <Link
                            to={`/pos/${key[1]}`}
                            className="w-min flex text-sm -translate-y-3 bg-rose-700 dark:bg-zinc-700 border-rose-700 text-white dark:border-zinc-600 hover:bg-rose-900 hover:border-rose-900 dark:hover:bg-rose-900 dark:hover:border-rose-500 border rounded-lg py-2 px-2 cursor-pointer transition-all"
                          >
                            <UserMini className="text-white mr-1 w-4 h-4 my-auto" />
                            <p className="">{key[1]}</p>
                          </Link>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className="grid grid-cols-2 gap-4 h-10 border-b border-zinc-200 dark:border-zinc-800 p-2 mb-2"
                          key={idx}
                        >
                          <h1 className="font-bold truncate">{key[0]}</h1>
                          <p>{key[1]}</p>
                        </div>
                      );
                    }
                  })}
                {!data && <Spinner />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
