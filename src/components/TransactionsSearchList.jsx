import { Link } from "react-router-dom";
import { CheckCircle, ExclamationCircle } from "../assets/icons";

export default function TransactionsSearchList({ data, className }) {
  className = className ? className : "";
  return (
    <div className={className + " overflow-hidden py-3"}>
      <div className="flex flex-col justify-between gap-2">
        <div className="flex w-full justify-between px-2">
          <p className="font-bold w-3">#</p>
          <h1 className="grow sm:grow-0 font-bold w-1/6 text-center capitalize truncate">
            Transaction ID
          </h1>
          <p className="grow sm:grow-0 font-bold w-1/6 text-center capitalize truncate">
            Pos ID
          </p>
          <p className="hidden sm:block font-bold w-1/6 text-center capitalize truncate">
            Type
          </p>
          <p className="hidden sm:block font-bold w-1/6 text-center capitalize truncate">
            Date
          </p>
          <p className="min-w-[55px] font-bold w-5 md:w-1/6  text-right capitalize truncate">
            Status
          </p>
        </div>
        {data.map((transaction_data, pdv_index) => (
          <Link
            to={`/transaction/${transaction_data.id}`}
            key={pdv_index}
            className="flex w-full justify-between border-zinc-700 border-opacity-50 hover:bg-rose-900 hover:border-rose-500 hover:-translate-y-1 border rounded-lg py-2 px-2 cursor-pointer transition-all"
          >
            <p className="font-semibold w-3">{pdv_index + 1}</p>
            <h1 className="grow sm:grow-0 w-1/5 text-center capitalize">
              {transaction_data.id}
            </h1>
            <p className="grow sm:grow-0 w-1/5 text-center capitalize">
              {transaction_data.posid}
            </p>
            <p className=" hidden sm:block w-1/5 text-center capitalize truncate">
              {transaction_data.type}
            </p>
            <p className=" hidden sm:block w-1/5 text-center capitalize truncate">
              {transaction_data.date.replace("T", " ")}
            </p>
            <div className="min-w-[55px] md:w-1/6 text-right capitalize flex justify-end">
              <div className="truncate hidden md:inline-block">
                {transaction_data.status}
              </div>
              {transaction_data.status == "Fulfilled" ||
              transaction_data.status == "Completed" ? (
                <CheckCircle className="text-green-500 w-5 min-w-min ml-2 my-auto" />
              ) : (
                <ExclamationCircle className="text-red-500 w-5 min-w-min ml-2 my-auto" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
