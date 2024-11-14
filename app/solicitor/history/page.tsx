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
import { Search, MoreVertical, Scale, Download, Eye, Calendar } from "lucide-react"
import { useState } from "react"

export default function SolicitorHistoryPage() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [selectedCase, setSelectedCase] = useState(null)

  const completedCases = [
    {
      id: "CASE-2024-001",
      applicationId: "APP-2024-001",
      applicant: "Ahmad bin Abdullah",
      type: "Business Registration",
      decision: "Legally Compliant",
      completedDate: "2024-03-15",
      reviewTime: "5 days"
    },
    {
      id: "CASE-2024-002",
      applicationId: "APP-2024-002",
      applicant: "Sarah Lee",
      type: "License Renewal",
      decision: "Non-Compliant",
      completedDate: "2024-03-12",
      reviewTime: "3 days"
    },
    {
      id: "CASE-2024-003",
      applicationId: "APP-2024-003",
      applicant: "Raj Kumar",
      type: "Permit Application",
      decision: "Legally Compliant",
      completedDate: "2024-03-10",
      reviewTime: "4 days"
    }
  ]

  const handleViewDetails = (caseItem) => {
    setSelectedCase(caseItem)
    setIsDetailsOpen(true)
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Review History</h2>
        <p className="text-muted-foreground">
          View your completed legal reviews and endorsements
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Reviews
            </CardTitle>
            <Scale className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-muted-foreground">
              All time
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Time
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 days</div>
            <p className="text-xs text-muted-foreground">
              Per review
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Compliance Rate
            </CardTitle>
            <Scale className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">
              Legal compliance
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              This Month
            </CardTitle>
            <Scale className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              Completed reviews
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Completed Reviews</CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search history..." 
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
                <TableHead>Case ID</TableHead>
                <TableHead>Application ID</TableHead>
                <TableHead>Applicant</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Decision</TableHead>
                <TableHead>Completed Date</TableHead>
                <TableHead>Review Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {completedCases.map((caseItem) => (
                <TableRow key={caseItem.id}>
                  <TableCell className="font-medium">{caseItem.id}</TableCell>
                  <TableCell>{caseItem.applicationId}</TableCell>
                  <TableCell>{caseItem.applicant}</TableCell>
                  <TableCell>{caseItem.type}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      caseItem.decision === "Legally Compliant"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {caseItem.decision}
                    </span>
                  </TableCell>
                  <TableCell>{caseItem.completedDate}</TableCell>
                  <TableCell>{caseItem.reviewTime}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewDetails(caseItem)}
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
                          <DropdownMenuItem>Download Report</DropdownMenuItem>
                          <DropdownMenuItem>View Documents</DropdownMenuItem>
                          <DropdownMenuItem>View Timeline</DropdownMenuItem>
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
            <DialogTitle>Review Details</DialogTitle>
          </DialogHeader>
          {selectedCase && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Case Information</h4>
                  <div className="space-y-1">
                    <p><span className="text-muted-foreground">Case ID:</span> {selectedCase.id}</p>
                    <p><span className="text-muted-foreground">Application ID:</span> {selectedCase.applicationId}</p>
                    <p><span className="text-muted-foreground">Applicant:</span> {selectedCase.applicant}</p>
                    <p><span className="text-muted-foreground">Type:</span> {selectedCase.type}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Review Details</h4>
                  <div className="space-y-1">
                    <p><span className="text-muted-foreground">Decision:</span> {selectedCase.decision}</p>
                    <p><span className="text-muted-foreground">Completed:</span> {selectedCase.completedDate}</p>
                    <p><span className="text-muted-foreground">Review Time:</span> {selectedCase.reviewTime}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Legal Analysis</h4>
                <p className="text-muted-foreground">
                  Detailed legal analysis and recommendations for the case...
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}