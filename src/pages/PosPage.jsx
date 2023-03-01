import { useEffect, useState, useRef } from "react";
import SearchBar from "../components/SearchBar";
import PosSearchList from "../components/PosSearchList";
import {
  getPosRange,
  getPosSearchSuggestions,
  searchPosbyId,
} from "../js/Data";
import { Spinner } from "../assets/icons";

let page = 0;
export default function PosPage() {
  const [searchType, setSearchType] = useState(true);
  const [suggestions, setSuggestions] = useState(null);
  const [data, setData] = useState([]);
  const [debounce, setDebounce] = useState(false);
  const searchbarInputRef = useRef();

  const getSuggestions = () => {
    setSuggestions(null);
    getPosSearchSuggestions(searchType, searchbarInputRef.current.value).then(
      (res) => {
        setSuggestions(res);
      }
    );
  };

  const getPage = () => {
    if (debounce == true) {
      return;
    }
    setDebounce(true);
    searchPosbyId(
      searchType,
      searchbarInputRef.current.value,
      page * 10,
      (page + 1) * 10
    ).then((res) => {
      setDebounce(false);
      if (res.length >= 0) {
        page++;
        setData([...data, ...res]);
      }
    });
  };

  const searchPage = () => {
    if (debounce == true) {
      return;
    }
    setDebounce(true);
    setSuggestions(null);
    searchPosbyId(searchType, searchbarInputRef.current.value, 0, 10).then(
      (res) => {
        setDebounce(false);
        page = 1;
        setData([...res]);
      }
    );
  };

  useEffect(() => {
    if (data.length == 0) {
      getPage();
    }
  }, []);
  return (
    <main className=" md:container p-4 md:mt-4 min-screen-height">
      <div className="flex flex-col">
        <div id="description" className="mb-4">
          <h1 className=" mb-2 text-5xl font-semibold text-zinc-200">
            Points of Sale
          </h1>
        </div>
        <div id="content">
          <SearchBar
            searchbarInputRef={searchbarInputRef}
            searchType={searchType}
            setSearchType={setSearchType}
            onClick={searchPage}
            suggestions={suggestions}
            getSuggestions={getSuggestions}
            searchTypeText={["Search by ID", "Search by Name"]}
          />
          <div className="mt-4 col-span-3 bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl transition-all thin-zinc-border">
            {data.length > 0 && <PosSearchList data={data} className="" />}
            {data.length == 0 && <Spinner className="mb-3 mx-auto" />}
            <button
              onClick={getPage}
              disabled={debounce}
              className={`w-full bg-zinc-700 border-zinc-600 hover:bg-rose-900 hover:border-rose-500 ${
                debounce ? "pointer-events-none" : ""
              } hover:-translate-y-1 border rounded-lg py-2 px-2 cursor-pointer transition-all focus-zinc`}
            >
              {debounce && <Spinner className="" size="h-[24px]" />}
              {!debounce && "Load more"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
