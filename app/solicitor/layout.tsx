"use client"

import { SolicitorHeader } from "@/components/solicitor/header"
import { SolicitorSideNav } from "@/components/solicitor/side-nav"

export default function SolicitorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <SolicitorSideNav />
      <div className="flex-1 flex flex-col">
        <SolicitorHeader />
        <main className="flex-1 overflow-y-auto bg-muted/5 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}