import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { SettingsIcon, SignoutIcon } from "../assets/icons";

export default function ProfileBtn({ children }) {
  return (
    <Menu as="div" className="relative inline-block text-left w-full h-full">
      <div className="w-full h-full">
        <Menu.Button className="special-menu-button shadow-inner shadow-zinc-800 hover:shadow-zinc-500">
          {children}
          <ChevronDownIcon
            className="hidden md:block ml-1 -mr-1 my-auto h-5 w-5"
            aria-hidden="true"
          />
          <ChevronUpIcon
            className="md:hidden ml-1 -mr-1 my-auto h-6 w-6"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -top-32 md:top-10 md:right-0 mt-2 w-full md:w-56 origin-top-right divide-y divide-zinc-700 divide-opacity-30 rounded-md bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <MenuItem Icon={SettingsIcon}>Settings</MenuItem>
          </div>
          <div className="px-1 py-1 ">
            <MenuItem Icon={SignoutIcon}>Sign out</MenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function MenuItem({ children, Icon }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? "bg-primary text-white" : "text-white"
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        >
          <Icon className="mr-3" />
          {children}
        </button>
      )}
    </Menu.Item>
  );
}
