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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Search, MoreVertical, Scale, Download, CheckCircle, XCircle, AlertTriangle, FileQuestion } from "lucide-react"
import { useState } from "react"

export default function SolicitorReviewsPage() {
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [selectedCase, setSelectedCase] = useState(null)

  const cases = [
    {
      id: "CASE-2024-001",
      applicationId: "APP-2024-001",
      applicant: "Ahmad bin Abdullah",
      type: "Business Registration",
      priority: "High",
      status: "Pending Review",
      dueDate: "2024-03-25",
    },
    {
      id: "CASE-2024-002",
      applicationId: "APP-2024-002",
      applicant: "Sarah Lee",
      type: "License Renewal",
      priority: "Medium",
      status: "In Progress",
      dueDate: "2024-03-28",
    },
    {
      id: "CASE-2024-003",
      applicationId: "APP-2024-003",
      applicant: "Raj Kumar",
      type: "Permit Application",
      priority: "Low",
      status: "Document Review",
      dueDate: "2024-03-22",
    }
  ]

  const handleReview = (caseItem) => {
    setSelectedCase(caseItem)
    setIsReviewOpen(true)
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Legal Reviews</h2>
        <p className="text-muted-foreground">
          Review and process your assigned cases
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Active Cases</CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search cases..." 
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
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases.map((caseItem) => (
                <TableRow key={caseItem.id}>
                  <TableCell className="font-medium">{caseItem.id}</TableCell>
                  <TableCell>{caseItem.applicationId}</TableCell>
                  <TableCell>{caseItem.applicant}</TableCell>
                  <TableCell>{caseItem.type}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      caseItem.priority === "High"
                        ? "bg-red-100 text-red-800"
                        : caseItem.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}>
                      {caseItem.priority}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      caseItem.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : caseItem.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {caseItem.status}
                    </span>
                  </TableCell>
                  <TableCell>{caseItem.dueDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleReview(caseItem)}
                      >
                        Review & Endorse
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
                          <DropdownMenuItem>Download Documents</DropdownMenuItem>
                          <DropdownMenuItem>Request Information</DropdownMenuItem>
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

      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Legal Review & Endorsement</DialogTitle>
            <DialogDescription>
              {selectedCase && `Reviewing case ${selectedCase.id} for ${selectedCase.applicant}`}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Legal Compliance</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select assessment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compliant">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Legally Compliant
                      </div>
                    </SelectItem>
                    <SelectItem value="non-compliant">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" />
                        Non-Compliant
                      </div>
                    </SelectItem>
                    <SelectItem value="review-needed">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        Needs Further Review
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Risk Assessment</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low Risk</SelectItem>
                    <SelectItem value="medium">Medium Risk</SelectItem>
                    <SelectItem value="high">High Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Legal Analysis</Label>
              <Textarea 
                placeholder="Provide your detailed legal analysis of the application..."
                className="min-h-[150px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Compliance Issues</Label>
              <Textarea 
                placeholder="List any compliance issues or concerns..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Recommendations</Label>
              <Textarea 
                placeholder="Provide your recommendations for approval/rejection..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Additional Requirements</Label>
              <Textarea 
                placeholder="Specify any additional documents or information required..."
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Legal Endorsement</Label>
              <Textarea 
                placeholder="Provide your official legal endorsement statement..."
                className="min-h-[100px]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsReviewOpen(false)}>
              Save Draft
            </Button>
            <Button variant="outline">
              Request Documents
            </Button>
            <Button onClick={() => setIsReviewOpen(false)}>
              Submit & Endorse
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}