import { PrismaClient } from '@prisma/client'
import CityCard from '@/app/components/CityCard'

const prisma = new PrismaClient()

export default async function MapsPage() {
  const cities = await prisma.city.findMany()

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-b-800">Offline City Maps</h1>
        <p className="text-gray-600 mt-2 text-base max-w-xl mx-auto">
          Download detailed offline maps of India’s most important cities —
          heritage sites, food destinations, and more.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cities.map((city) => (
          <CityCard
            key={city.id}
            name={city.name}
            state={city.state}
            mapUrl={city.mapUrl}
            category={city.category ?? undefined}
            size={city.size ?? undefined}
            image={city.image ?? undefined}
          />

        ))}
      </div>
    </section>
  )
}
