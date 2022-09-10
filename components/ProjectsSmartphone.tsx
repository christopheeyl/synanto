import React from 'react'
import * as cst from '../constants'

export default function ProjetcsSmartphone() {
  return (
    <>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Projects</h2>
        </div>
        <ul role="list" className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
          {cst.projects.map((project) => (
            <li key={project.id}>
              <a href="#" className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                <span className="flex items-center truncate space-x-3">
                  <span
                    className={cst.classNames(project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full')}
                    aria-hidden="true"
                  />
                  <span className="font-medium truncate text-sm leading-6">
                    {project.title} <span className="truncate font-normal text-gray-500">in {project.team}</span>
                  </span>
                </span>
                <cst.svg.ChevronRightIcon
                  className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}