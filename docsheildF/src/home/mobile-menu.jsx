"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../components/ui/button"
import "./mobile-menu.css"

export default function MobileMenu({ toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    toggleSidebar()
  }

  return (
    <div className="mobile-menu-container">
      <Button variant="ghost" className="mobile-menu-button" onClick={handleToggle}>
        {isOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
      </Button>
    </div>
  )
}

