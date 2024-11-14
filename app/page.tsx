import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, FileText, User } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Welcome to PERNAS Next</h1>
          <p className="text-muted-foreground">
            Your comprehensive platform for managing applications and documents
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="hover:bg-accent transition-colors">
            <Link href="/user">
              <CardHeader>
                <User className="h-8 w-8 mb-2" />
                <CardTitle>User Portal</CardTitle>
                <CardDescription>Submit and track applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Access Portal
                </Button>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:bg-accent transition-colors">
            <Link href="/admin">
              <CardHeader>
                <Building2 className="h-8 w-8 mb-2" />
                <CardTitle>Admin Portal</CardTitle>
                <CardDescription>Manage applications and users</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Access Admin
                </Button>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:bg-accent transition-colors">
            <Link href="/solicitor">
              <CardHeader>
                <FileText className="h-8 w-8 mb-2" />
                <CardTitle>Solicitor Portal</CardTitle>
                <CardDescription>Review and process legal documents</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Access Solicitor
                </Button>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}