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
import { Separator } from "@/components/ui/separator"

export default function FinancialApplication() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Financial Application</h1>
          <p className="text-muted-foreground">
            Apply for financial assistance or funding
          </p>
        </div>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Business Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input id="business-name" placeholder="Enter business name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registration-number">Registration Number</Label>
                  <Input id="registration-number" placeholder="Enter registration number" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business-address">Business Address</Label>
                <Textarea id="business-address" placeholder="Enter complete business address" />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="funding-type">Type of Funding</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select funding type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="working-capital">Working Capital</SelectItem>
                    <SelectItem value="equipment">Equipment Financing</SelectItem>
                    <SelectItem value="expansion">Business Expansion</SelectItem>
                    <SelectItem value="startup">Startup Funding</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="amount">Requested Amount (MYR)</Label>
                  <Input id="amount" type="number" placeholder="Enter amount" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tenure">Tenure (Months)</Label>
                  <Input id="tenure" type="number" placeholder="Enter tenure" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="purpose">Purpose of Funding</Label>
                <Textarea 
                  id="purpose" 
                  placeholder="Describe how you plan to use the funds"
                  className="min-h-[100px]"
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Financial Documents</Label>
                <div className="grid gap-4 md:grid-cols-2">
                  <Button variant="outline" className="w-full">
                    Upload Bank Statements
                  </Button>
                  <Button variant="outline" className="w-full">
                    Upload Financial Statements
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