import { CarList } from "@/components/car-list"
import { FilterSidebar } from "@/components/filter-sidebar"

export default function BrowseCarsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Browse Cars</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar />
        <CarList />
      </div>
    </div>
  )
}

