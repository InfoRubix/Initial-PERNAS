import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, FileText } from "lucide-react"

export default function TrackProgress() {
  const steps = [
    {
      id: 1,
      title: "Application Submitted",
      date: "2024-03-20",
      status: "completed",
    },
    {
      id: 2,
      title: "Document Verification",
      date: "2024-03-21",
      status: "completed",
    },
    {
      id: 3,
      title: "Review Process",
      date: "2024-03-22",
      status: "in-progress",
    },
    {
      id: 4,
      title: "Final Approval",
      status: "pending",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Track Progress</h1>
          <p className="text-muted-foreground">
            Monitor the status of your current application
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Application Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {steps.map((step, index) => (
                <div key={step.id} className="flex gap-4 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={`rounded-full p-2 ${
                      step.status === "completed" ? "bg-green-100 text-green-600" :
                      step.status === "in-progress" ? "bg-yellow-100 text-yellow-600" :
                      "bg-gray-100 text-gray-400"
                    }`}>
                      {step.status === "completed" ? (
                        <CheckCircle2 className="h-6 w-6" />
                      ) : (
                        <Clock className="h-6 w-6" />
                      )}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className={`h-full w-0.5 ${
                        step.status === "completed" ? "bg-green-600" : "bg-gray-200"
                      }`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{step.title}</h3>
                    {step.date && (
                      <p className="text-sm text-muted-foreground">{step.date}</p>
                    )}
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