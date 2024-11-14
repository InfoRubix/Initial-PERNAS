import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Upload, Download } from "lucide-react"

export default function DocumentLibrary() {
  const documents = [
    {
      id: "DOC001",
      name: "Business Registration Certificate",
      type: "PDF",
      uploadDate: "2024-03-20",
    },
    {
      id: "DOC002",
      name: "Tax Clearance",
      type: "PDF",
      uploadDate: "2024-03-15",
    },
    {
      id: "DOC003",
      name: "Company Profile",
      type: "PDF",
      uploadDate: "2024-03-10",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Document Library</h1>
          <p className="text-muted-foreground">
            Manage your uploaded documents
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upload New Document</CardTitle>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid gap-4">
          {documents.map((doc) => (
            <Card key={doc.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileText className="h-5 w-5" />
                  {doc.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Uploaded on {doc.uploadDate}
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}