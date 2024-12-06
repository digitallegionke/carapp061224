import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CarList() {
  return (
    <div className="flex-1 space-y-6">
      {cars.map((car) => (
        <Card key={car.id}>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/3">
                <Image
                  src={car.image}
                  alt={car.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-2">
                <Link href={`/cars/${car.id}`} className="hover:underline">
                  <h2 className="text-xl font-semibold">{car.title}</h2>
                </Link>
                <p className="text-muted-foreground">{car.details}</p>
                <p className="text-lg font-bold text-purple-600">KSh {car.price.toLocaleString()}</p>
                <div className="flex space-x-2">
                  <Link href={`/cars/${car.id}`} passHref>
                    <Button variant="outline" className="w-full md:w-auto">View Details</Button>
                  </Link>
                  <Button>Contact Seller</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

const cars = [
  {
    id: 1,
    title: "2021 Toyota Prado TX",
    details: "23,000 km • Automatic • Diesel • 7 Seater • Nairobi",
    price: 6500000,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "2020 Mazda CX-5 Grand Touring",
    details: "31,000 km • Automatic • Petrol • 5 Seater • Mombasa",
    price: 3900000,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "2022 Nissan X-Trail Hybrid",
    details: "12,000 km • Automatic • Hybrid • 5 Seater • Kisumu",
    price: 5200000,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "2021 Subaru Forester 2.0i-S EyeSight",
    details: "28,000 km • Automatic • Petrol • 5 Seater • Nakuru",
    price: 4500000,
    image: "/placeholder.svg?height=200&width=300",
  },
]

