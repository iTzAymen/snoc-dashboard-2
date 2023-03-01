import DropDown from "./Dropdowns";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const daysDroplist = [...Array(30)].map((_, i) => ({ value: i + 1 }));
daysDroplist.unshift({ value: "Days" });
const monthsDropList = [...Array(12)].map((_, i) => ({ value: months[i] }));
monthsDropList.unshift({ value: "Months" });
const yearsDropsList = [2022, 2023].map((obj) => ({
  value: obj,
}));
export default function DateInput({ updateDate, date }) {
  return (
    <div className="flex flex-nowrap">
      <DropDown
        updateDate={updateDate}
        label="Day"
        droplist={daysDroplist}
        initial_value={daysDroplist[0]}
        className="bg-zinc-800 sm:w-20 hover:bg-zinc-850 border-zinc-600 border border-r-0 px-2 py-2 rounded-l-lg"
      />
      <DropDown
        updateDate={updateDate}
        label="Month"
        droplist={monthsDropList}
        initial_value={monthsDropList[0]}
        className="bg-zinc-800 sm:w-[24] hover:bg-zinc-850 border-zinc-600 border px-2 py-2"
      />
      <DropDown
        updateDate={updateDate}
        label="Year"
        droplist={yearsDropsList}
        initial_value={yearsDropsList[yearsDropsList.length - 1]}
        className="bg-zinc-800 sm:w-24 hover:bg-zinc-850 border-zinc-600 border border-l-0 px-2 py-2 rounded-r-lg"
      />
    </div>
  );
}
