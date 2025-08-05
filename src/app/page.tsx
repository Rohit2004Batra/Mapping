import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl space-y-6">
        <Image
          src="/india-map-icon.png" // Add a nice map icon or India flag here
          alt="MapSathi Logo"
          width={100}
          height={100}
          className="mx-auto"
        />

        <h1 className="text-4xl font-bold text-blue-800 sm:text-5xl">
          Welcome to MapSathi
        </h1>

        <p className="text-lg text-gray-600">
          Discover offline maps of major Indian cities. Explore heritage,
          food, and attractions even without an internet connection.
        </p>

        <Button asChild size="lg" className="mt-4">
          <Link href="/maps">Explore Maps</Link>
        </Button>
      </div>

      <footer className="mt-20 text-sm text-gray-400">
        Built for the Ministry of Tourism, Govt. of India 🇮🇳
      </footer>
    </section>
  )
}
