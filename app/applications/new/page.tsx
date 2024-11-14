import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, FileText, Wallet } from "lucide-react"
import Link from "next/link"

export default function NewApplication() {
  const applications = [
    {
      title: "General Application",
      description: "Submit a standard business application",
      icon: FileText,
      href: "/applications/new/general",
      color: "text-blue-500",
    },
    {
      title: "Financial Application",
      description: "Apply for financial assistance or funding",
      icon: Wallet,
      href: "/applications/new/financial",
      color: "text-green-500",
    },
    {
      title: "Franchise Agreement",
      description: "Apply for franchise registration and agreement",
      icon: Building2,
      href: "/applications/new/franchise",
      color: "text-purple-500",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">New Application</h1>
          <p className="text-muted-foreground">
            Choose the type of application you would like to submit
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {applications.map((app) => {
            const Icon = app.icon
            return (
              <Link href={app.href} key={app.title}>
                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <Icon className={`h-8 w-8 ${app.color} mb-2`} />
                    <CardTitle className="text-xl">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{app.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}