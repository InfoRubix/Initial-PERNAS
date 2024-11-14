import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const applications = [
  {
    id: "APP123",
    name: "Ahmad bin Abdullah",
    email: "ahmad@example.com",
    type: "Property Rental - KLCC",
    status: "pending",
  },
  {
    id: "APP124",
    name: "Siti Aminah",
    email: "siti@example.com",
    type: "Property Rental - PJ",
    status: "reviewing",
  },
  {
    id: "APP125",
    name: "Mohd Razak",
    email: "razak@example.com",
    type: "Property Rental - Shah Alam",
    status: "pending",
  },
  {
    id: "APP126",
    name: "Nurul Huda",
    email: "nurul@example.com",
    type: "Property Rental - KLCC",
    status: "reviewing",
  },
  {
    id: "APP127",
    name: "Ismail Ibrahim",
    email: "ismail@example.com",
    type: "Property Rental - PJ",
    status: "pending",
  },
]

export function RecentApplications() {
  return (
    <div className="space-y-8">
      {applications.map((application) => (
        <div key={application.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {application.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{application.name}</p>
            <p className="text-sm text-muted-foreground">
              {application.type}
            </p>
          </div>
          <div className="ml-auto font-medium">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                application.status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}