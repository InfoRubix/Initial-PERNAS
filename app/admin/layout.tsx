"use client"

import { SideNav } from "@/components/admin/side-nav"
import { AdminHeader } from "@/components/admin/header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto bg-muted/5 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}