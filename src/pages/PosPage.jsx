import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import PosSearchList from "../components/PosSearchList";
import { getPosRange } from "../js/Data";

let page = 0;
let debounce = false;
export default function PosPage() {
  const [searchType, setSearchType] = useState(true);
  const [data, setData] = useState([]);

  const getPage = () => {
    if (debounce == true) {
      return;
    }
    debounce = true;
    getPosRange(page * 10, (page + 1) * 10).then((res) => {
      page++;
      debounce = false;
      setData([...data, ...res]);
    });
  };

  useEffect(() => {
    if (data.length == 0) {
      getPage();
    }
  }, []);
  return (
    <main className=" md:container p-4 md:mt-4">
      <div className="flex flex-col">
        <div id="description" className="mb-4">
          <h1 className=" mb-2 text-5xl font-semibold text-zinc-200">
            Points of Sale
          </h1>
          <p className="text-lg font-medium text-zinc-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            deserunt rem voluptatem quis quam eveniet inventore in ut nam
            dignissimos?
          </p>
        </div>
        <div id="content">
          <SearchBar
            searchType={searchType}
            setSearchType={setSearchType}
            searchTypeText={["Search by ID", "Search by Name"]}
          />
          <div className="mt-4 col-span-3 bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <PosSearchList data={data} className="" />
            <button
              onClick={getPage}
              className="w-full bg-zinc-700 border-zinc-600 hover:bg-rose-900 hover:border-rose-500 hover:-translate-y-1 border rounded-lg py-2 px-2 cursor-pointer transition-all focus-zinc"
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
