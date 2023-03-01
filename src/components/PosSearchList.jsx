import { Link } from "react-router-dom";

export default function PosSearchList({ data, className }) {
  className = className ? className : "";
  return (
    <div className={className + " py-3"}>
      <div className="flex flex-col justify-between gap-2">
        <div className="flex w-full justify-between px-2">
          <p className="font-bold w-3">#</p>
          <h1 className="font-bold w-1/3 sm:w-1/5 text-left capitalize truncate">
            Pos Name
          </h1>
          <p className="font-bold w-1/4 sm:w-1/5 text-center capitaliz truncate">
            Pos ID
          </p>
          <p className="hidden sm:block font-bold w-1/5 text-center capitalize truncate">
            Wilaya
          </p>
          <p className="font-bold w-1/6 text-right capitalize truncate">
            Total
          </p>
        </div>
        {data.map((pdv_data, pdv_index) => (
          <Link
            to={"/pos/" + pdv_data.id}
            key={pdv_index}
            className="flex w-full justify-between border-zinc-700 border-opacity-50 hover:bg-rose-900 hover:border-rose-500 hover:-translate-y-1 border rounded-lg py-2 px-2 cursor-pointer transition-all"
          >
            <p className="font-semibold w-3">{pdv_index + 1}</p>
            <h1 className="w-1/3 sm:w-1/5 text-left capitalize truncate">
              {pdv_data.name}
            </h1>
            <p className="w-1/4 sm:w-1/5 text-center capitalize truncate">
              {pdv_data.id}
            </p>
            <p className="hidden sm:block w-1/5 text-center capitalize truncate">
              {pdv_data.wilaya}
            </p>
            <p className=" w-1/6 text-right capitalize truncate">
              {pdv_data.count}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
