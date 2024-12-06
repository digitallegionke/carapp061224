"use client"

import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-purple-600/90 to-purple-800/90 py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Find Your Perfect Car in Kenya
          </h1>
          <p className="mb-10 text-lg text-white/90">
            Browse through thousands of verified cars from trusted dealers and private sellers across Kenya
          </p>
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-4 shadow-lg">
            <div className="flex flex-wrap gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cars</SelectItem>
                  <SelectItem value="used">Used Cars</SelectItem>
                  <SelectItem value="new">New Cars</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                </SelectContent>
              </Select>
              <Input className="flex-1" placeholder="Search by model or keyword" />
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

