import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Web3Modal from "./Web3Modal";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { XIcon } from "lucide-react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
//import { CardTitle } from "./ui/card";

const navigation = [
  {
    name: "MAFIA SWAP",
    href: "./",
    icon: "/images/icons/swap.svg",
    activeIcon: "/images/icons/swap-active.svg",
    current: true,
  },
  {
    name: "TRADE",
    href: "/coming-soon",
    icon: "/images/icons/trade.svg",
    activeIcon: "/images/icons/trade-active.svg",
    current: false,
  },
  {
    name: "BRIDGE",
    href: "/coming-soon",
    icon: "/images/icons/bridge.svg",
    activeIcon: "/images/icons/bridge-active.svg",
    current: false,
  },
  {
    name: "GOVERNANCE 2.0",
    href: "/coming-soon",
    icon: "/images/icons/governance.svg",
    activeIcon: "/images/icons/governance-active.svg",
    current: false,
  },
  {
    name: "POOLS",
    href: "/coming-soon",
    icon: "/images/icons/pools.svg",
    activeIcon: "/images/icons/pools-active.svg",
    current: false,
  },
  {
    name: "FIAT",
    href: "/coming-soon",
    icon: "/images/icons/fiat.svg",
    activeIcon: "/images/icons/fiat-active.svg",
    current: false,
  },
  {
    name: "REFER & EARN",
    href: "/coming-soon",
    icon: "/images/icons/fiat.svg",
    activeIcon: "/images/icons/fiat-active.svg",
    current: false,
  },
  {
    name: "SUPPORT",
    href: "/coming-soon",
    icon: "/images/icons/fiat.svg",
    activeIcon: "/images/icons/fiat-active.svg",
    current: false,
  },
  {
    name: "HELP",
    href: "/coming-soon",
    icon: "/images/icons/fiat.svg",
    activeIcon: "/images/icons/fiat-active.svg",
    current: false,
  },
];

const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] bg-center bg-repeat bg-[url('/images/gradient-bg.svg')]">
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col px-6 pb-4 overflow-y-auto bg-gray-900 grow gap-y-5 ring-1 ring-white/10">
                    <div className="flex items-center h-16 shrink-0">
                      <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-col flex-1">
                      <ul role="list" className="flex flex-col flex-1 gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                  )}
                                >
                                  <img
                                    src={
                                      item.current ? item.activeIcon : item.icon
                                    }
                                    className="w-8 h-8 shrink-0"
                                    aria-hidden="true"
                                    alt={item.name}
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <ul role="list" className="mt-2 -mx-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="flex p-2 -mx-2 text-sm font-semibold leading-6 text-gray-400 rounded-md group gap-x-3 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="w-6 h-6 shrink-0"
                              aria-hidden="true"
                            />
                            Discord
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div
          className={classNames(
            expanded ? "lg:w-72" : "lg:w-20",
            "hidden transition-all duration-150 ease-in-out lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col"
          )}
        >
          <div className="flex flex-col px-6 pb-4 overflow-y-auto bg-[#11110F] grow gap-y-5">
            <a href="./" className="flex items-center h-24 shrink-0">
              {!expanded && (<img src="/meme-mafia-logo.svg" alt="logo" className="h-20" />  )}
              {expanded && (
                 <img src="/meme-mafia-expanded-logo.svg" alt="logo" className="h-20" />
              )}
            </a>
            <nav className="flex flex-col flex-1">
              <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            !expanded && "justify-center",
                            "group flex gap-x-3 items-center rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          {/* <item.icon
                            className="w-6 h-6 shrink-0"
                            aria-hidden="true"
                          /> */}
                          <img
                            src={item.current ? item.activeIcon : item.icon}
                            className="w-8 h-8 shrink-0"
                            aria-hidden="true"
                            alt={item.name}
                          />
                          {expanded && <span>{item.name}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {expanded && <p className="text-sm text-gray-600">
                  v1.4 <br /> RELEASE DATE April 10
                </p> }
                <li className="mt-auto">
                  <a
                    href="https://discord.gg/h9jg7UAHyp"
                    className={classNames(
                      !expanded && "justify-center",
                      "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    )}
                  >
                    <DiscordLogoIcon
                      className="w-6 h-6 shrink-0"
                      aria-hidden="true"
                    />
                    {expanded && <span>Discord</span>}
                  </a>
                  <a
                    href="https://twitter.com/TheMemeMafiaX"
                    className={classNames(
                      !expanded && "justify-center",
                      "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    )}
                  >
                    <XIcon className="w-6 h-6 shrink-0" aria-hidden="true" />
                    {expanded && <span>Twitter</span>}
                  </a>
                </li>
                {expanded && <p className="pb-8 text-sm text-gray-600">
                © 2024 The Meme Mafia. All rights reserved
                </p> }
              </ul>
            </nav>
          </div>

          <button
            onClick={() => setExpanded(!expanded)} // Toggles expanded state
            className={classNames(
              expanded ? "absolute opacity-100" : "absolute opacity-100", // Consider removing "absolute" class if not needed
              "left-full top-2 h-14 rounded-r-md bg-[#262626] p-1 text-black transition-all ease-in-out duration-150"
            )}
          >
            <ChevronRightIcon
              className={classNames(
                expanded ? "rotate-180" : "",
                "h-4 w-4 shrink-0 text-[#CDFF3A]"
              )}
            />
          </button>
        </div>

        <div className={`${expanded ? "lg:pl-72" : "lg:pl-20"}`}>
          <div className="sticky top-0 z-40 flex items-center h-16 px-4 bg-white border-b border-gray-200 shadow-sm lg:hidden shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <main className="">
            <div className="px-4 sm:px-6 lg:px-8">
              <Navbar />
              <Outlet />
              <Web3Modal />
            </div>
          </main>
        </div>
      </div>

      {/* <div className="w-full py-4 text-center">
        Copyright © <a href="https://zilab.co">ZiLab Technologies</a>{" "}
        {new Date().getFullYear()}
      </div> */}
    </div>
  );
}
