import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../assets/icons";
import { getPosRange } from "../js/Data";

export default function PosCard({ className, children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length == 0) {
      getPosRange(0, 10).then((res) => {
        setData([...data, ...res]);
      });
    }
  }, []);
  return (
    <div
      className={
        className +
        " bg-white dark:bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col thin-zinc-border"
      }
    >
      <div className="flex justify-between mb-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
        <h1
          className={
            "text-xl font-semibold truncate text-dark dark:text-zinc-200 inline-block"
          }
        >
          {children}
        </h1>
      </div>
      <div className="flex flex-col justify-between gap-2 grow">
        <div className="flex w-full justify-between px-2">
          <p className="font-bold">#</p>
          <h1 className="font-bold truncate  w-1/2">POS NAME</h1>
          <p className="font-bold truncate">POS ID</p>
          <h1 className="font-bold truncate">Total</h1>
        </div>
        {data.length > 0 &&
          data.map((pdv_data, pdv_index) => (
            <Link
              to={"/pos/" + pdv_data.id}
              key={pdv_index}
              className="flex w-full justify-between border-zinc-400 dark:border-zinc-700 border-opacity-50 hover:bg-rose-700 hover:border-rose-700 hover:text-white dark:hover:bg-rose-900 dark:hover:border-rose-500 hover:-translate-y-1 border rounded-lg py-2 px-2 cursor-pointer transition-all"
            >
              <p className="font-semibold">{pdv_index + 1}</p>
              <h1 className="truncate w-1/2">{pdv_data.name}</h1>
              <p className="truncate ">{pdv_data.id}</p>
              <h1 className="truncate ">{pdv_data.count}</h1>
            </Link>
          ))}
        {data.length == 0 && <Spinner size="h-[4rem]" />}
      </div>
    </div>
  );
}
