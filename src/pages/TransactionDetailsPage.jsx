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
          <h1 className=" mb-2 text-5xl font-semibold text-zinc-200">
            Transaction Details
          </h1>
          <p className="text-lg font-medium text-zinc-400">
            This page displays transaction details for a specific Transaction
            ID. It includes information such as the point of sale ID, customer's
            phone number, transaction status, and product details. There are
            also fields for customer information and activation documents.
          </p>
        </div>
        <div id="content">
          <div className="w-full gap-y-4 lg:gap-4">
            <div className="flex flex-col bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all thin-zinc-border">
              <h1 className="text-xl font-semibold truncate text-zinc-200 inline-block mb-2 pb-2 border-b border-zinc-800 w-full">
                Information
              </h1>
              <div className="w-full grow flex flex-col">
                {data &&
                  data.map((key, idx) => {
                    if (key[0] == "code_pdv") {
                      return (
                        <div
                          className="grid grid-cols-2 h-10 border-b border-zinc-800 p-2 mb-2"
                          key={idx}
                        >
                          <h1 className="font-bold">{key[0]}</h1>
                          <Link
                            to={`/pos/${key[1]}`}
                            className="w-min flex text-sm -translate-y-3 bg-zinc-700 border-zinc-600 hover:bg-rose-900 hover:border-rose-500 border rounded-lg py-2 px-2 cursor-pointer transition-all"
                          >
                            <UserMini className="text-white mr-1 w-4 h-4 my-auto" />
                            <p className="">{key[1]}</p>
                          </Link>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className="grid grid-cols-2 h-10 border-b border-zinc-800 p-2 mb-2"
                          key={idx}
                        >
                          <h1 className="font-bold">{key[0]}</h1>
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
