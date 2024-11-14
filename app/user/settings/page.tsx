"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Clock,
  Shield,
  Globe,
  Moon,
  Sun,
} from "lucide-react"

export default function UserSettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your preferences and account settings
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive application updates via email
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <Switch defaultChecked />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>SMS Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Get urgent notifications via SMS
                </p>
              </div>
              <div className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                <Switch defaultChecked />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Status Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Receive application status changes
                </p>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <Switch defaultChecked />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>System Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  In-app notifications and alerts
                </p>
              </div>
              <div className="flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security
                </p>
              </div>
              <div className="flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                <Switch />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Session Timeout</Label>
              <Select defaultValue="30">
                <SelectTrigger>
                  <SelectValue placeholder="Select timeout duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="120">2 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Theme</Label>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="w-full">
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </Button>
                <Button variant="outline" className="w-full">
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Language</Label>
              <Select defaultValue="en">
                <SelectTrigger>
                  <SelectValue>
                    <div className="flex items-center">
                      <Globe className="mr-2 h-4 w-4" />
                      English
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ms">Bahasa Melayu</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Application Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-save Applications</Label>
                <p className="text-sm text-muted-foreground">
                  Save application drafts automatically
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Document Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Get reminded about pending documents
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Application Timeline</Label>
                <p className="text-sm text-muted-foreground">
                  Show detailed application timeline
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}