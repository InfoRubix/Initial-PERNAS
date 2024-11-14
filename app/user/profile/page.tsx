"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Phone, Building2, FileText } from "lucide-react"

export default function UserProfilePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Profile Settings</h2>
        <p className="text-muted-foreground">
          Manage your account information and preferences
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
                  <Input id="name" defaultValue="Ahmad Abdullah" />
                  <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input id="email" type="email" defaultValue="ahmad@example.com" />
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
                <Label htmlFor="company">Company Name</Label>
                <div className="relative">
                  <Input id="company" defaultValue="Tech Solutions Sdn Bhd" />
                  <Building2 className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Account Type</Label>
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-medium">Business Account</span>
                <span className="text-sm text-muted-foreground">(Verified)</span>
              </div>
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
            <CardTitle>Business Documents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Business Registration</p>
                  <p className="text-sm text-muted-foreground">SSM Certificate</p>
                </div>
                <Button variant="outline" size="sm">Update</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Company Profile</p>
                  <p className="text-sm text-muted-foreground">Corporate Information</p>
                </div>
                <Button variant="outline" size="sm">Update</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Directors Information</p>
                  <p className="text-sm text-muted-foreground">Board Members Details</p>
                </div>
                <Button variant="outline" size="sm">Update</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}