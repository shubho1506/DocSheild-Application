"use client"

import { useState } from "react"
import MobileMenu from "./mobile-menu"
import "./layout.css"

export default function HomeLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="home-layout">
      <MobileMenu toggleSidebar={toggleSidebar} />
      <div className={`sidebar-wrapper ${sidebarOpen ? "open" : ""}`}>{children}</div>
    </div>
  )
}

