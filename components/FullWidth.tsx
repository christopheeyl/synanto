import { useState } from 'react'
import Sidebar from './Sidebar'
import SidebarSmartphone from './SidebarSmartphone'
import Header from './Header'
import ButtonsFilter from './ButtonsFilter'
import Projects from './Projects'
import ProjectsSmartphone from './ProjectsSmartphone'
import HeaderSmartphone from './HeaderSmartphone'

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="min-h-full">
        <SidebarSmartphone sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar />
        {/* Main column */}
        <div className="lg:pl-64 flex flex-col">
          <HeaderSmartphone sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-1">
            <Header/>
            <ButtonsFilter />            
            <Projects />
            <ProjectsSmartphone />
          </main>
        </div>
      </div>
    </>
  )
}
