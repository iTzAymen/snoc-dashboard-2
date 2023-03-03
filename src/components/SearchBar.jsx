import { SwitchIcon } from "../assets/icons";

export default function SearchBar({
  searchType,
  setSearchType,
  searchTypeText,
  onClick,
  searchbarInputRef,
  suggestions,
  getSuggestions,
}) {
  function toggleSuggestions(val) {
    const hiddenDiv = document.querySelector(".search-suggestions");
    if (hiddenDiv) {
      if (val) {
        hiddenDiv.classList.remove("hidden");
      } else {
        setTimeout(() => {
          hiddenDiv.classList.add("hidden");
        }, 100);
      }
    }
  }
  return (
    <div className="flex gap-4">
      <div className="flex grow relative align-middle">
        <input
          onBlur={() => {
            toggleSuggestions(false);
          }}
          onFocus={() => {
            toggleSuggestions(true);
          }}
          onChange={getSuggestions}
          ref={searchbarInputRef}
          placeholder={searchType ? searchTypeText[0] : searchTypeText[1]}
          className="bg-zinc-50 dark:bg-zinc-900 rounded-lg grow p-2 focus-zinc placeholder:text-zinc-500 thin-zinc-border"
        ></input>
        {searchType != undefined && (
          <button
            onClick={() => {
              setSearchType(!searchType);
            }}
            className={`focus-zinc absolute right-2 cursor-pointer top-1/2 -translate-y-1/2 bg-opacity-25 rounded-md thin-zinc-border ${
              searchType
                ? "hover:bg-zinc-300 dark:hover:bg-zinc-900 hover:bg-opacity-50 bg-zinc-200 dark:bg-zinc-800"
                : "hover:bg-zinc-400 dark:hover:bg-zinc-600 hover:bg-opacity-50 bg-zinc-300 dark:bg-zinc-400"
            }`}
          >
            <SwitchIcon className="text-dark dark:text-zinc-100 box-content p-1" />
          </button>
        )}
        {suggestions && suggestions.length > 0 && (
          <div className="search-suggestions z-40 absolute w-full top-full bg-zinc-100 rounded-lg py-2 thin-zinc-border shadow-lg">
            {suggestions.map((item, index) => (
              <div
                key={index}
                className="py-2 px-4 hover:bg-zinc-200 text-dark border-b border-zinc-200 border-opacity-50 cursor-pointer"
                onClick={() => {
                  console.log("clicked");
                  searchbarInputRef.current.value = item.id;
                  onClick();
                }}
              >
                {item.id}
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={onClick}
        className="bg-rose-700 text-white dark:bg-zinc-700 border-rose-700 dark:hover:bg-rose-900 dark:border-zinc-600 border hover:bg-rose-900 active:bg-rose-900 hover:border-rose-900 dark:hover:border-rose-500 rounded-lg px-4 py-2 focus-zinc transition-all"
      >
        Search
      </button>
    </div>
  );
}
