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
import { Search, MoreVertical, FileText, Download, Eye, Clock, Plus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ApplicationsPage() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [selectedApplication, setSelectedApplication] = useState(null)

  const applications = [
    {
      id: "APP-2024-001",
      type: "Business Registration",
      status: "Under Review",
      submittedDate: "2024-03-20",
      assignedTo: "John Doe, Esq.",
      documents: [
        "Business Registration Form",
        "Company Constitution",
        "Directors' Information"
      ]
    },
    {
      id: "APP-2024-002",
      type: "License Renewal",
      status: "Pending Documents",
      submittedDate: "2024-03-15",
      assignedTo: "Sarah Smith, LLB",
      documents: [
        "Current License",
        "Financial Statements",
        "Compliance Report"
      ]
    },
    {
      id: "APP-2024-003",
      type: "Permit Application",
      status: "Document Review",
      submittedDate: "2024-03-18",
      assignedTo: "Michael Wong, JD",
      documents: [
        "Permit Application Form",
        "Site Plans",
        "Safety Certificates"
      ]
    }
  ]

  const handleViewDetails = (application) => {
    setSelectedApplication(application)
    setIsDetailsOpen(true)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Applications</h2>
          <p className="text-muted-foreground">
            Manage and track your applications
          </p>
        </div>
        <Button asChild>
          <Link href="/user/applications/new">
            <Plus className="mr-2 h-4 w-4" />
            New Application
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Applications
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Currently processing
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Time
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2 days</div>
            <p className="text-xs text-muted-foreground">
              Processing time
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Documents
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Require attention
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
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Applications submitted
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Active Applications</CardTitle>
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
                <TableHead>Assigned To</TableHead>
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
                      application.status === "Under Review"
                        ? "bg-blue-100 text-blue-800"
                        : application.status === "Pending Documents"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-purple-100 text-purple-800"
                    }`}>
                      {application.status}
                    </span>
                  </TableCell>
                  <TableCell>{application.submittedDate}</TableCell>
                  <TableCell>{application.assignedTo}</TableCell>
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
                          <DropdownMenuItem>Track Progress</DropdownMenuItem>
                          <DropdownMenuItem>View Documents</DropdownMenuItem>
                          <DropdownMenuItem>Download PDF</DropdownMenuItem>
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
                  <h4 className="font-medium mb-2">Review Information</h4>
                  <div className="space-y-1">
                    <p><span className="text-muted-foreground">Assigned To:</span> {selectedApplication.assignedTo}</p>
                    <p><span className="text-muted-foreground">Documents:</span></p>
                    <ul className="list-disc pl-4 text-sm text-muted-foreground">
                      {selectedApplication.documents.map((doc, index) => (
                        <li key={index}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Timeline</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <p className="text-sm">Application Submitted - {selectedApplication.submittedDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <p className="text-sm">Assigned to {selectedApplication.assignedTo}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <p className="text-sm">Current Status: {selectedApplication.status}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}