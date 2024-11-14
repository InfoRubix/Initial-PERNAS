"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Store, MapPin } from "lucide-react"
import Link from "next/link"

const availableProperties = [
  {
    id: "PROP-001",
    title: "PERNAS Retail Space - KLCC",
    location: "Jalan Tun Razak, KLCC",
    size: "1,200 sqft",
    rate: "RM 8,000/month",
    type: "Retail Store",
    description: "Prime retail space in the heart of Kuala Lumpur",
  },
  {
    id: "PROP-002",
    title: "PERNAS Shop Lot - Petaling Jaya",
    location: "Seksyen 14, PJ",
    size: "800 sqft",
    rate: "RM 5,500/month",
    type: "Shop Lot",
    description: "Strategic location in bustling commercial area",
  },
  {
    id: "PROP-003",
    title: "PERNAS Commercial Space - Shah Alam",
    location: "Seksyen 7, Shah Alam",
    size: "1,500 sqft",
    rate: "RM 6,800/month",
    type: "Commercial Space",
    description: "Spacious commercial lot in prime business district",
  },
]

export default function NewApplication() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Available Properties</h1>
        <p className="text-muted-foreground">
          Browse and apply for PERNAS rental properties
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {availableProperties.map((property) => (
          <Link href={`/user/applications/new/rental/${property.id}`} key={property.id}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <Store className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">{property.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Size:</span>
                    <span>{property.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rate:</span>
                    <span>{property.rate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Type:</span>
                    <span>{property.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {property.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}