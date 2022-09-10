import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import * as cst from '../constants'

export default function ButtonsFilter() {
    return (
    <>
        {/* Buttons filter */}
        <div className="px-4 mt-6 sm:px-6 lg:px-8">
            <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Buttons filter</h2>
            <ul role="list" className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
            {cst.pinnedProjects.map((project) => (
                <li key={project.id} className="relative col-span-1 flex shadow-sm rounded-md">
                <div
                    className={cst.classNames(
                    project.bgColorClass,
                    'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                    )}
                >
                    {project.initials}
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                    <div className="flex-1 px-4 py-2 text-sm truncate">
                    <a href="#" className="text-gray-900 font-medium hover:text-gray-600">
                        {project.title}
                    </a>
                    <p className="text-gray-500">{project.totalMembers} Members</p>
                    </div>
                    <Menu as="div" className="flex-shrink-0 pr-2">
                    <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        <span className="sr-only">Open options</span>
                        <cst.svg.DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
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
                                View
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
                                Removed from pinned
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
                                Share
                                </a>
                            )}
                            </Menu.Item>
                        </div>
                        </Menu.Items>
                    </Transition>
                    </Menu>
                </div>
                </li>
            ))}
            </ul>
        </div>
    </>
  )
}