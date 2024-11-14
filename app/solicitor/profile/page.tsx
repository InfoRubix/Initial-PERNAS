"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, Phone, Scale, Award, BookOpen } from "lucide-react"

export default function SolicitorProfilePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Profile Settings</h2>
        <p className="text-muted-foreground">
          Manage your solicitor profile and preferences
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <Input id="name" defaultValue="John Doe, Esq." />
                  <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input id="email" type="email" defaultValue="john.doe@lawfirm.com" />
                  <Mail className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Input id="phone" type="tel" defaultValue="+60 12-345 6789" />
                  <Phone className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bar-number">Bar Number</Label>
                <div className="relative">
                  <Input id="bar-number" defaultValue="MAL12345" />
                  <Scale className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Professional Qualifications</Label>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center space-x-2 bg-muted/50 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Malaysian Bar</p>
                    <p className="text-sm text-muted-foreground">Licensed since 2010</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-muted/50 p-3 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">LLB, University of Malaya</p>
                    <p className="text-sm text-muted-foreground">Class of 2008</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="specialization">Areas of Specialization</Label>
              <Textarea 
                id="specialization"
                defaultValue="Corporate Law, Business Registration, Commercial Contracts"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea 
                id="bio"
                defaultValue="Over 15 years of experience in corporate law and business registration. Specialized in handling complex commercial contracts and regulatory compliance matters."
                className="min-h-[150px]"
              />
            </div>

            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Update Password</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive case updates via email</p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-muted-foreground">Receive urgent notifications via SMS</p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Due Date Reminders</p>
                <p className="text-sm text-muted-foreground">Receive reminders for upcoming deadlines</p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}