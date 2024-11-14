"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Building2, MapPin, Store } from "lucide-react"

const availableProperties = [
  {
    id: "PROP-001",
    name: "PERNAS Retail Space - Kuala Lumpur City Center",
    location: "Jalan Tun Razak, KLCC",
    size: "1,200 sqft",
    type: "Retail Store",
    rate: "RM 8,000/month"
  },
  {
    id: "PROP-002",
    name: "PERNAS Shop Lot - Petaling Jaya",
    location: "Seksyen 14, PJ",
    size: "800 sqft",
    type: "Shop Lot",
    rate: "RM 5,500/month"
  },
  {
    id: "PROP-003",
    name: "PERNAS Commercial Space - Shah Alam",
    location: "Seksyen 7, Shah Alam",
    size: "1,500 sqft",
    type: "Commercial Space",
    rate: "RM 6,800/month"
  }
]

export default function RentalApplication() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Property Rental Application</h1>
          <p className="text-muted-foreground">
            Apply to rent a PERNAS commercial property for your business
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {availableProperties.map((property) => (
            <Card key={property.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Store className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-lg">{property.name}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="font-medium">{property.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rate:</span>
                    <span className="font-medium">{property.rate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Rental Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label>Select Property</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a property" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableProperties.map((property) => (
                      <SelectItem key={property.id} value={property.id}>
                        {property.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input id="business-name" placeholder="Enter your business name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registration-number">Business Registration Number</Label>
                  <Input id="registration-number" placeholder="Enter SSM number" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-person">Contact Person</Label>
                  <Input id="contact-person" placeholder="Enter full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-number">Contact Number</Label>
                  <Input id="contact-number" type="tel" placeholder="Enter phone number" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business-type">Type of Business</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail Store</SelectItem>
                    <SelectItem value="food">Food & Beverage</SelectItem>
                    <SelectItem value="service">Service Business</SelectItem>
                    <SelectItem value="office">Professional Office</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business-plan">Business Plan Summary</Label>
                <Textarea 
                  id="business-plan" 
                  placeholder="Briefly describe your business plan and how you intend to use the space"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Required Documents</Label>
                <div className="grid gap-4 md:grid-cols-2">
                  <Button variant="outline" className="w-full">
                    <Building2 className="mr-2 h-4 w-4" />
                    Upload Business Registration
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Store className="mr-2 h-4 w-4" />
                    Upload Business Proposal
                  </Button>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline">Save as Draft</Button>
                <Button type="submit">Submit Application</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}