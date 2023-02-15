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

export default function DateInput({ updateDate }) {
  return (
    <div className="inline-block">
      <DropDown
        updateDate={updateDate}
        label="Day"
        droplist={[...Array(30)].map((_, i) => ({ value: i + 1 }))}
        className="bg-zinc-800 w-20 hover:bg-zinc-850 border-zinc-600 border border-r-0 px-2 py-1 rounded-l-lg"
      />
      <DropDown
        updateDate={updateDate}
        label="Month"
        droplist={[...Array(12)].map((_, i) => ({ value: months[i] }))}
        className="bg-zinc-800 w-24 hover:bg-zinc-850 border-zinc-600 border px-2 py-1"
      />
      <DropDown
        updateDate={updateDate}
        label="Year"
        droplist={[2022, 2023].map((obj) => ({
          value: obj,
        }))}
        className="bg-zinc-800 w-24 hover:bg-zinc-850 border-zinc-600 border border-l-0 px-2 py-1 rounded-r-lg"
      />
    </div>
  );
}
