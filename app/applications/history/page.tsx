import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Clock, CheckCircle2, XCircle } from "lucide-react"

export default function ApplicationHistory() {
  const applications = [
    {
      id: "APP001",
      type: "Business Registration",
      status: "Approved",
      date: "2024-03-20",
    },
    {
      id: "APP002",
      type: "License Renewal",
      status: "Pending",
      date: "2024-03-15",
    },
    {
      id: "APP003",
      type: "Permit Application",
      status: "Rejected",
      date: "2024-03-10",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Application History</h1>
          <p className="text-muted-foreground">
            View and track your previous applications
          </p>
        </div>

        <div className="grid gap-4">
          {applications.map((app) => (
            <Card key={app.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {app.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{app.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {app.status === "Approved" && (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    )}
                    {app.status === "Pending" && (
                      <Clock className="h-4 w-4 text-yellow-500" />
                    )}
                    {app.status === "Rejected" && (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-sm ${
                      app.status === "Approved" ? "text-green-500" :
                      app.status === "Rejected" ? "text-red-500" :
                      "text-yellow-500"
                    }`}>
                      {app.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}