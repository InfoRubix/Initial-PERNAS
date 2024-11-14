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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreVertical, Scale, Download, Users } from "lucide-react"
import { useState } from "react"

export default function ApprovalsPage() {
  const [isAssignOpen, setIsAssignOpen] = useState(false)
  const [selectedApplication, setSelectedApplication] = useState(null)

  const applications = [
    {
      id: "APP-2024-001",
      applicant: "Ahmad bin Abdullah",
      type: "Business Registration",
      status: "Pending Legal Review",
      submittedDate: "2024-03-20",
      assignedTo: null,
    },
    {
      id: "APP-2024-002",
      applicant: "Sarah Lee",
      type: "License Renewal",
      status: "Under Legal Review",
      submittedDate: "2024-03-19",
      assignedTo: "John Doe, Esq.",
    },
    {
      id: "APP-2024-003",
      applicant: "Raj Kumar",
      type: "Permit Application",
      status: "Legal Review Complete",
      submittedDate: "2024-03-18",
      assignedTo: "Jane Smith, LLB",
    }
  ]

  const solicitors = [
    { 
      id: "SOL1", 
      name: "John Doe, Esq.", 
      specialization: "Corporate Law",
      currentCases: 3,
      experience: "15 years"
    },
    { 
      id: "SOL2", 
      name: "Jane Smith, LLB", 
      specialization: "Business Law",
      currentCases: 2,
      experience: "12 years"
    },
    { 
      id: "SOL3", 
      name: "Michael Wong, JD", 
      specialization: "Commercial Law",
      currentCases: 4,
      experience: "8 years"
    }
  ]

  const handleAssign = (application) => {
    setSelectedApplication(application)
    setIsAssignOpen(true)
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Legal Approvals</h2>
        <p className="text-muted-foreground">
          Manage legal reviews and solicitor assignments
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Reviews
            </CardTitle>
            <Scale className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              Awaiting legal review
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Under Review
            </CardTitle>
            <Scale className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Currently being reviewed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Available Solicitors
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Ready for assignment
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Reviews
            </CardTitle>
            <Scale className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Legal Review Queue</CardTitle>
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
                <TableHead>Applicant</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned Solicitor</TableHead>
                <TableHead>Submitted Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">{application.id}</TableCell>
                  <TableCell>{application.applicant}</TableCell>
                  <TableCell>{application.type}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      application.status === "Legal Review Complete"
                        ? "bg-green-100 text-green-800"
                        : application.status === "Under Legal Review"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {application.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {application.assignedTo || (
                      <span className="text-muted-foreground text-sm">Unassigned</span>
                    )}
                  </TableCell>
                  <TableCell>{application.submittedDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAssign(application)}
                        className="flex items-center gap-1"
                      >
                        <Users className="h-4 w-4" />
                        {application.assignedTo ? "Reassign" : "Assign"}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>View Documents</DropdownMenuItem>
                          <DropdownMenuItem>Track Progress</DropdownMenuItem>
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

      <Dialog open={isAssignOpen} onOpenChange={setIsAssignOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Assign Solicitor</DialogTitle>
            <DialogDescription>
              {selectedApplication && `Assigning solicitor for application ${selectedApplication.id} from ${selectedApplication.applicant}`}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Solicitor</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a solicitor" />
                  </SelectTrigger>
                  <SelectContent>
                    {solicitors.map((solicitor) => (
                      <SelectItem key={solicitor.id} value={solicitor.id}>
                        <div className="flex flex-col">
                          <span>{solicitor.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {solicitor.specialization} • {solicitor.experience} • {solicitor.currentCases} active cases
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Priority Level</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Set priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="medium">Medium Priority</SelectItem>
                    <SelectItem value="low">Low Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Due Date</label>
                <Input type="date" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Notes</label>
                <Input 
                  placeholder="Add any specific instructions or notes for the solicitor..."
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAssignOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsAssignOpen(false)}>
              Confirm Assignment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}