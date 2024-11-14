"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Printer, Eye } from "lucide-react"

// Mock data for demonstration
const applicationData = {
  id: "APP-2024-001",
  applicant: "Ahmad bin Abdullah",
  businessName: "Syarikat Maju Jaya",
  propertyDetails: {
    location: "PERNAS Retail Space - KLCC",
    size: "1,200 sqft",
    rate: "RM 8,000/month"
  },
  businessType: "Retail Store",
  contactDetails: {
    phone: "+60 12-345 6789",
    email: "ahmad@example.com"
  }
}

export default function PreviewPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Application Preview</h2>
          <p className="text-muted-foreground">
            Preview your application before submission
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Application Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-medium mb-2">Applicant Information</h3>
              <div className="space-y-1">
                <p><span className="text-muted-foreground">Application ID:</span> {applicationData.id}</p>
                <p><span className="text-muted-foreground">Applicant Name:</span> {applicationData.applicant}</p>
                <p><span className="text-muted-foreground">Business Name:</span> {applicationData.businessName}</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Property Details</h3>
              <div className="space-y-1">
                <p><span className="text-muted-foreground">Location:</span> {applicationData.propertyDetails.location}</p>
                <p><span className="text-muted-foreground">Size:</span> {applicationData.propertyDetails.size}</p>
                <p><span className="text-muted-foreground">Monthly Rate:</span> {applicationData.propertyDetails.rate}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-medium mb-2">Business Information</h3>
              <div className="space-y-1">
                <p><span className="text-muted-foreground">Business Type:</span> {applicationData.businessType}</p>
                <p><span className="text-muted-foreground">Phone:</span> {applicationData.contactDetails.phone}</p>
                <p><span className="text-muted-foreground">Email:</span> {applicationData.contactDetails.email}</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Required Documents</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Business Registration</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Financial Statement</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}