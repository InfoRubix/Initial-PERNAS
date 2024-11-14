"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreVertical, FileText, Download, Eye, Clock, CheckCircle2, XCircle } from "lucide-react"
import { useState } from "react"

export default function UserHistoryPage() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [selectedApplication, setSelectedApplication] = useState(null)

  const applications = [
    {
      id: "APP-2024-001",
      type: "Business Registration",
      status: "Approved",
      submittedDate: "2024-03-15",
      completedDate: "2024-03-20",
      reviewedBy: "John Doe, Esq.",
      comments: "All requirements met. Business registration approved."
    },
    {
      id: "APP-2024-002",
      type: "License Renewal",
      status: "Pending",
      submittedDate: "2024-03-18",
      completedDate: null,
      reviewedBy: "Sarah Smith, LLB",
      comments: "Under legal review"
    },
    {
      id: "APP-2024-003",
      type: "Permit Application",
      status: "Rejected",
      submittedDate: "2024-03-10",
      completedDate: "2024-03-12",
      reviewedBy: "Michael Wong, JD",
      comments: "Missing required documentation"
    }
  ]

  const handleViewDetails = (application) => {
    setSelectedApplication(application)
    setIsDetailsOpen(true)
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Application History</h2>
        <p className="text-muted-foreground">
          View your past applications and their status
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Applications
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              All time
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Processing Time
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2 days</div>
            <p className="text-xs text-muted-foreground">
              Average time
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Approval Rate
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">
              Success rate
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              This Month
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Applications submitted
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Application History</CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search applications..." 
                  className="w-[300px]"
                />
              </div>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Application ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted Date</TableHead>
                <TableHead>Completed Date</TableHead>
                <TableHead>Reviewed By</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">{application.id}</TableCell>
                  <TableCell>{application.type}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      application.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : application.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {application.status}
                    </span>
                  </TableCell>
                  <TableCell>{application.submittedDate}</TableCell>
                  <TableCell>{application.completedDate || "-"}</TableCell>
                  <TableCell>{application.reviewedBy}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewDetails(application)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Download PDF</DropdownMenuItem>
                          <DropdownMenuItem>View Documents</DropdownMenuItem>
                          <DropdownMenuItem>Track Timeline</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
          </DialogHeader>
          {selectedApplication && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Application Information</h4>
                  <div className="space-y-1">
                    <p><span className="text-muted-foreground">Application ID:</span> {selectedApplication.id}</p>
                    <p><span className="text-muted-foreground">Type:</span> {selectedApplication.type}</p>
                    <p><span className="text-muted-foreground">Status:</span> {selectedApplication.status}</p>
                    <p><span className="text-muted-foreground">Submitted:</span> {selectedApplication.submittedDate}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Review Details</h4>
                  <div className="space-y-1">
                    <p><span className="text-muted-foreground">Reviewed By:</span> {selectedApplication.reviewedBy}</p>
                    <p><span className="text-muted-foreground">Completed:</span> {selectedApplication.completedDate || "In Progress"}</p>
                    <p><span className="text-muted-foreground">Comments:</span> {selectedApplication.comments}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Timeline</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <p className="text-sm">Application Submitted - {selectedApplication.submittedDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <p className="text-sm">Under Review - Processing</p>
                  </div>
                  {selectedApplication.completedDate && (
                    <div className="flex items-center gap-2">
                      {selectedApplication.status === "Approved" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      <p className="text-sm">
                        Application {selectedApplication.status} - {selectedApplication.completedDate}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}