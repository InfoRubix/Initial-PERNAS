import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, History, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function UserDashboard() {
  const applications = [
    {
      id: "APP-2024-001",
      type: "Business Registration",
      status: "Under Review",
      submittedDate: "2024-03-20",
    },
    {
      id: "APP-2024-002",
      type: "License Renewal",
      status: "Pending Documents",
      submittedDate: "2024-03-15",
    }
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">My Applications</h1>
          <p className="text-muted-foreground">
            Manage and track your applications
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Your latest submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-sm text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Review</CardTitle>
              <CardDescription>Applications being processed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-sm text-muted-foreground">Awaiting response</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Approved</CardTitle>
              <CardDescription>Successfully processed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-sm text-muted-foreground">Total approved</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Uploaded files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-sm text-muted-foreground">Active documents</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end">
          <Button asChild>
            <Link href="/user/applications/new">New Application</Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <FileText className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{app.type}</p>
                      <p className="text-sm text-muted-foreground">ID: {app.id}</p>
                      <p className="text-sm text-muted-foreground">Submitted: {app.submittedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      app.status === "Under Review" 
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {app.status}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/user/applications/${app.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}