"use client"

import Link from "next/link"
import { Building2, FileText, Home, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu as NavMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function SiteNavigation() {
  return (
    <nav className="border-b bg-white">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold">PERNAS Next</span>
        </Link>
        <MainNavigation />
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative h-8 w-8 rounded-full"
          >
            <User className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative h-8 w-8 rounded-full"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

function MainNavigation() {
  return (
    <NavMenu className="ml-8">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            )}>
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <FileText className="mr-2 h-4 w-4" />
            Applications
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/applications/new" title="New Application">
                Start a new application process
              </ListItem>
              <ListItem href="/applications/history" title="Application History">
                View your previous applications
              </ListItem>
              <ListItem href="/applications/documents" title="Document Library">
                Access your uploaded documents
              </ListItem>
              <ListItem href="/applications/track" title="Track Progress">
                Monitor your application status
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavMenu>
  )
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}