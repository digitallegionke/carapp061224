import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturedListings() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">Featured Listings</h2>
          <p className="text-muted-foreground">
            Discover our hand-picked selection of premium vehicles from verified sellers in Kenya
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredCars.map((car) => (
            <Card key={car.id}>
              <CardContent className="p-0">
                <Image
                  src={car.image}
                  alt={car.title}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold">{car.title}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">{car.details}</p>
                  <p className="text-xl font-bold text-purple-600">KSh {car.price.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const featuredCars = [
  {
    id: 1,
    title: "2021 Toyota Prado",
    details: "23,000 km • Automatic • Diesel",
    price: 6500000,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "2020 Mazda CX-5",
    details: "31,000 km • Automatic • Petrol",
    price: 3900000,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "2022 Nissan X-Trail",
    details: "12,000 km • Automatic • Hybrid",
    price: 5200000,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "2021 Subaru Forester",
    details: "28,000 km • Automatic • Petrol",
    price: 4500000,
    image: "/placeholder.svg?height=300&width=400",
  },
]

