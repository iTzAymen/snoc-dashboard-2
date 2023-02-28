import { SwitchIcon } from "../assets/icons";

export default function SearchBar({
  searchType,
  setSearchType,
  searchTypeText,
}) {
  return (
    <div className="flex gap-4">
      <div className="flex grow relative align-middle">
        <input
          placeholder={searchType ? searchTypeText[0] : searchTypeText[1]}
          className="bg-zinc-900 rounded-lg grow p-2 focus-zinc placeholder:text-zinc-500 thin-zinc-border"
        ></input>
        {searchType != undefined && (
          <button
            onClick={() => {
              setSearchType(!searchType);
            }}
            className={`focus-zinc absolute right-2 cursor-pointer top-1/2 -translate-y-1/2 bg-opacity-25 rounded-md thin-zinc-border ${
              searchType
                ? "hover:bg-zinc-900 hover:bg-opacity-50 bg-zinc-800"
                : "hover:bg-zinc-600 hover:bg-opacity-50 bg-zinc-400"
            }`}
          >
            <SwitchIcon className="text-zinc-100 box-content p-1" />
          </button>
        )}
      </div>
      <button className="bg-zinc-700 border-zinc-600 border hover:bg-rose-900 active:bg-rose-900 hover:border-rose-500 rounded-lg px-4 py-2 focus-zinc transition-all">
        Search
      </button>
    </div>
  );
}
