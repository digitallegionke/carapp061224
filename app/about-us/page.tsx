import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">About mandai.co.ke</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4">
            mandai.co.ke is Kenya's premier online marketplace for buying and selling vehicles. Our mission is to make
            car transactions simple, transparent, and enjoyable for everyone in Kenya.
          </p>
          <p className="mb-4">
            Founded in 2023, we've quickly grown to become a trusted platform for thousands of car buyers and sellers
            across the country. We're committed to providing a safe, user-friendly experience that takes the stress out
            of buying or selling a car.
          </p>
          <p>
            Whether you're looking for your first car, upgrading to a family vehicle, or selling your current ride,
            mandai.co.ke is here to help you every step of the way.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Team at mandai.co.ke"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const values = [
  {
    title: "Trust",
    description: "We build trust through transparency and honest dealings in every transaction.",
  },
  {
    title: "Innovation",
    description: "We continuously innovate to make car buying and selling easier and more efficient.",
  },
  {
    title: "Customer First",
    description: "Our customers' needs and satisfaction are at the heart of everything we do.",
  },
]

