"use client"

import { UserHeader } from "@/components/user/header"
import { UserSideNav } from "@/components/user/side-nav"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <UserSideNav />
      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="flex-1 overflow-y-auto bg-muted/5 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}