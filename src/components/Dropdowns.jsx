import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function DaysDropdown({
  className,
  label,
  droplist,
  updateDate,
  initial_value,
}) {
  const [selected, setSelected] = useState(initial_value);
  const updateSelected = (value) => {
    if (label == "Day") {
      updateDate({ day: value.value });
    } else if (label == "Month") {
      updateDate({ month: value.value });
    } else {
      updateDate({ year: value.value });
    }

    setSelected(value);
  };
  className = className ? className : "";
  return (
    <Listbox value={selected} onChange={updateSelected}>
      <div className="relative inline-block grow">
        <Listbox.Button
          className={
            className +
            " relative w-full cursor-default py-2 pl-3 pr-9 text-left shadow-md focus:outline-none focus-visible:border-rose-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-300 sm:text-sm"
          }
        >
          <span className="block">{selected ? selected.value : label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className=" dropdown-list absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-100 dark:bg-zinc-800 py-1 text-base shadow-lg ring-1 ring-dark dark:ring-dark ring-opacity-5 focus:outline-none sm:text-sm">
            {droplist.map((object, objectIdx) => (
              <Listbox.Option
                key={objectIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-auto ${
                    active
                      ? "bg-rose-700 dark:bg-rose-900 text-rose-100"
                      : "text-dark dark:text-zinc-100"
                  }`
                }
                value={object}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate text-right pr-3 ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {object.value}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 dark:text-rose-100">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
