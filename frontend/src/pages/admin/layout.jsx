// src/pages/admin/layout.jsx
import React from "react"
import { AppSidebar } from "@/components/AppSidebar"

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <AppSidebar />
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  )
}

export default Layout
