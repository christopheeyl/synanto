import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import * as cst from '../constants'

export default function Sidebar() {
    return (
    <>        
        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
            <div className="flex items-center flex-shrink-0 px-6">
            <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
                alt="Workflow"
            />
            </div>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
            {/* User account dropdown */}
            <Menu as="div" className="px-3 relative inline-block text-left">
                <div>
                <Menu.Button className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
                    <span className="flex w-full justify-between items-center">
                    <span className="flex min-w-0 items-center justify-between space-x-3">
                        <img
                        className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                        alt=""
                        />
                        <span className="flex-1 flex flex-col min-w-0">
                        <span className="text-gray-900 text-sm font-medium truncate">Jessy Schwarz</span>
                        <span className="text-gray-500 text-sm truncate">@jessyschwarz</span>
                        </span>
                    </span>
                    <cst.svg.SelectorIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                    </span>
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
                <Menu.Items className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                    <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={cst.classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            View profile
                        </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={cst.classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Settings
                        </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={cst.classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Notifications
                        </a>
                        )}
                    </Menu.Item>
                    </div>
                    <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={cst.classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Get desktop app
                        </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={cst.classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Support
                        </a>
                        )}
                    </Menu.Item>
                    </div>
                    <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={cst.classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Logout
                        </a>
                        )}
                    </Menu.Item>
                    </div>
                </Menu.Items>
                </Transition>
            </Menu>
            {/* Sidebar Search */}
            <div className="px-3 mt-5">
                <label htmlFor="search" className="sr-only">
                Search
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                <div
                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    aria-hidden="true"
                >
                    <cst.svg.SearchIcon className="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search"
                />
                </div>
            </div>
            {/* Navigation */}
            <nav className="px-3 mt-6">
                <div className="space-y-1">
                {cst.navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className={cst.classNames(
                        item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                    <item.icon
                        className={cst.classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                    />
                    {item.name}
                    </a>
                ))}
                </div>
                <div className="mt-8">
                {/* Secondary navigation */}
                <h3
                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    id="desktop-teams-headline"
                >
                    Teams
                </h3>
                <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
                    {cst.teams.map((team) => (
                    <a
                        key={team.name}
                        href={team.href}
                        className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                        <span
                        className={cst.classNames(team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full')}
                        aria-hidden="true"
                        />
                        <span className="truncate">{team.name}</span>
                    </a>
                    ))}
                </div>
                </div>
            </nav>
            </div>
        </div>
    </>
    )
}
