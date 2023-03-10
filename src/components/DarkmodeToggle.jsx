import { useState } from "react";

export default function DarkmodeToggle() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  console.log(document.documentElement.classList.contains("dark"));
  const toggleDark = () => {
    const newval = !dark;
    setDark(newval);
    localStorage.setItem("theme", newval);
    console.log(newval);
    if (newval) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="h-6 flex ">
      <MoonIcon className="h-6 w-6 mr-3 text-zinc-900 dark:text-white" />
      <div className="flex items-center">
        <span className="text-zinc-900 dark:text-white text-center items-center">
          Darkmode
        </span>
      </div>
      <div
        onClick={toggleDark}
        className="bg-zinc-100 relative flex dark:bg-zinc-800 shadow-inner shadow-zinc-300 dark:shadow-zinc-900 h-6 w-10 rounded-full ml-auto group cursor-pointer"
      >
        <div
          className={`h-6 w-6 absolute  rounded-full thin-zinc-border bg-white shadow-md dark:bg-zinc-200 group-hover:scale-110 active:scale-95 transition-all ${
            dark ? " left-full -translate-x-full " : "left-0 -translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

function MoonIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
}
