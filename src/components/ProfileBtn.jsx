import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { SettingsIcon, SignoutIcon } from "../assets/icons";
import { Logout } from "../js/Login";

export default function ProfileBtn({ children }) {
  return (
    <Menu as="div" className="relative inline-block text-left w-full h-full">
      <div className="w-full h-full">
        <Menu.Button className="special-menu-button">
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
        enterFrom="transform opacity-0 scale-100"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-100"
      >
        <Menu.Items className="absolute border-zinc-700 border overflow-hidden -top-72 md:top-10 md:right-0 mt-2 w-full md:w-56 origin-top-right divide-y divide-zinc-700 divide-opacity-30 rounded-lg bg-zinc-800 shadow-lg shadow-zinc-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ProfileCard username="Aymen" rank="admin" />
          <div className="">
            <MenuItem Icon={SettingsIcon}>Settings</MenuItem>
          </div>
          <div className="">
            <MenuItem Icon={SignoutIcon} onClick={Logout}>
              Sign out
            </MenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function MenuItem({ children, Icon, onClick }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={onClick}
          className={`${
            active ? "bg-rose-900 text-white" : " text-white"
          } group flex w-full items-center px-2 py-2 text-sm`}
        >
          <Icon className="mr-3" />
          {children}
        </button>
      )}
    </Menu.Item>
  );
}

function ProfileCard({ username, rank }) {
  return (
    <div className="h-44 p-2 gap-2 flex flex-col align-baseline overflow-hidden">
      <img
        src={`https://api.dicebear.com/5.x/identicon/svg?seed=${
          username + rank
        }`}
        alt="avatar"
        className="bg-zinc-900 rounded-full mx-auto my-2 h-24 aspect-square border-zinc-700 border"
      ></img>
      <div className="flex flex-col text-center">
        <p className="text-xs text-zinc-200 font-light capitalize">{rank}</p>
        <h1 className="text-sm text-zinc-50 capitalize">{username}</h1>
      </div>
    </div>
  );
}
