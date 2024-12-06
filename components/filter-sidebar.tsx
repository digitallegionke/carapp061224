"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 10000000])

  return (
    <div className="w-full md:w-64 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <Slider
          min={0}
          max={10000000}
          step={100000}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm">
          <span>KSh {priceRange[0].toLocaleString()}</span>
          <span>KSh {priceRange[1].toLocaleString()}</span>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Make</h2>
        {["Toyota", "Mazda", "Nissan", "Subaru", "Honda"].map((make) => (
          <div key={make} className="flex items-center space-x-2 mb-2">
            <Checkbox id={`make-${make}`} />
            <Label htmlFor={`make-${make}`}>{make}</Label>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Body Type</h2>
        {["SUV", "Sedan", "Hatchback", "Pickup", "Van"].map((type) => (
          <div key={type} className="flex items-center space-x-2 mb-2">
            <Checkbox id={`type-${type}`} />
            <Label htmlFor={`type-${type}`}>{type}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}

