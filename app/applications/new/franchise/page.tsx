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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function FranchiseApplication() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Franchise Agreement Application</h1>
          <p className="text-muted-foreground">
            Register your franchise and submit agreement details
          </p>
        </div>

        <Tabs defaultValue="franchisor" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="franchisor">Franchisor Details</TabsTrigger>
            <TabsTrigger value="franchise">Franchise Details</TabsTrigger>
          </TabsList>

          <TabsContent value="franchisor">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Franchisor Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" placeholder="Enter company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registration-number">Registration Number</Label>
                      <Input id="registration-number" placeholder="Enter registration number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company-address">Registered Address</Label>
                    <Textarea id="company-address" placeholder="Enter complete company address" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-person">Contact Person</Label>
                      <Input id="contact-person" placeholder="Enter name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-number">Contact Number</Label>
                      <Input id="contact-number" placeholder="Enter phone number" />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Next</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="franchise">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Franchise Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="franchise-name">Franchise Brand Name</Label>
                    <Input id="franchise-name" placeholder="Enter franchise name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business-type">Type of Business</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="food">Food & Beverage</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="franchise-fee">Initial Franchise Fee (MYR)</Label>
                      <Input id="franchise-fee" type="number" placeholder="Enter amount" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="royalty-rate">Royalty Rate (%)</Label>
                      <Input id="royalty-rate" type="number" placeholder="Enter percentage" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="territory">Territory Rights</Label>
                    <Textarea 
                      id="territory" 
                      placeholder="Describe the territory rights and restrictions"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="support">Training and Support</Label>
                    <Textarea 
                      id="support" 
                      placeholder="Describe the training and support provided to franchisees"
                      className="min-h-[100px]"
                    />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Required Documents</Label>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Button variant="outline" className="w-full">
                        Upload Franchise Agreement
                      </Button>
                      <Button variant="outline" className="w-full">
                        Upload Disclosure Document
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}