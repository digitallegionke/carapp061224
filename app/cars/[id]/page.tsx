import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a database or API
const getCar = (id: string) => {
  const car = cars.find(c => c.id.toString() === id)
  if (!car) throw new Error("Car not found")
  return car
}

export default function CarDetailsPage({ params }: { params: { id: string } }) {
  const car = getCar(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Image
                src={car.image}
                alt={car.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{car.title}</h1>
              <p className="text-2xl font-bold text-purple-600">KSh {car.price.toLocaleString()}</p>
              <div className="space-y-2">
                <p><strong>Year:</strong> {car.year}</p>
                <p><strong>Mileage:</strong> {car.mileage.toLocaleString()} km</p>
                <p><strong>Transmission:</strong> {car.transmission}</p>
                <p><strong>Fuel Type:</strong> {car.fuelType}</p>
                <p><strong>Location:</strong> {car.location}</p>
              </div>
              <p className="text-muted-foreground">{car.description}</p>
              <div className="space-y-2">
                <Button className="w-full">Contact Seller</Button>
                <Button variant="outline" className="w-full">Schedule Test Drive</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const cars = [
  {
    id: 1,
    title: "2021 Toyota Prado TX",
    year: 2021,
    mileage: 23000,
    transmission: "Automatic",
    fuelType: "Diesel",
    location: "Nairobi",
    price: 6500000,
    image: "/placeholder.svg?height=400&width=600",
    description: "This 2021 Toyota Prado TX is in excellent condition with low mileage. It features a powerful diesel engine, comfortable interior, and advanced safety features. Perfect for both city driving and off-road adventures.",
  },
  {
    id: 2,
    title: "2020 Mazda CX-5 Grand Touring",
    year: 2020,
    mileage: 31000,
    transmission: "Automatic",
    fuelType: "Petrol",
    location: "Mombasa",
    price: 3900000,
    image: "/placeholder.svg?height=400&width=600",
    description: "This 2020 Mazda CX-5 Grand Touring offers a perfect blend of style, comfort, and performance. With its sleek design and advanced features, it's ideal for those seeking a premium driving experience.",
  },
  {
    id: 3,
    title: "2022 Nissan X-Trail Hybrid",
    year: 2022,
    mileage: 12000,
    transmission: "Automatic",
    fuelType: "Hybrid",
    location: "Kisumu",
    price: 5200000,
    image: "/placeholder.svg?height=400&width=600",
    description: "Experience the future of driving with this 2022 Nissan X-Trail Hybrid. It offers excellent fuel efficiency, smooth performance, and a spacious interior, making it perfect for eco-conscious families.",
  },
  {
    id: 4,
    title: "2021 Subaru Forester 2.0i-S EyeSight",
    year: 2021,
    mileage: 28000,
    transmission: "Automatic",
    fuelType: "Petrol",
    location: "Nakuru",
    price: 4500000,
    image: "/placeholder.svg?height=400&width=600",
    description: "This 2021 Subaru Forester comes equipped with the advanced EyeSight driver assist technology. It offers a comfortable ride, excellent visibility, and Subaru's renowned all-wheel-drive system for enhanced safety and performance.",
  },
]

