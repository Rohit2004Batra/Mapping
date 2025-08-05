import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Props = {
  name: string
  state: string
  mapUrl: string
  category?: string
  size?: string
  image?: string
  date?: string // optional future enhancement
}

export default function CityCard({ name, state, mapUrl, category, size, image, date }: Props) {
  return (
    <Card className="rounded-xl overflow-hidden shadow-lg bg-gray-900 text-white w-[300px] hover:scale-[1.02] transition-transform">
      
      {/* Image or Banner */}
      <div className="relative w-full h-48 bg-black">
        {image ? (
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            🗺️
          </div>
        )}

        {/* Date badge (optional) */}
        {date && (
          <div className="absolute top-2 left-2 bg-black/70 text-xs px-3 py-1 rounded-full">
            {date}
          </div>
        )}
      </div>

      {/* Text Content */}
      <CardHeader className="pb-0">
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="text-sm text-gray-400">{state}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-2 pt-2">
        {category && <Badge variant="secondary">{category}</Badge>}
        {size && <p className="text-xs text-gray-400">Size: {size}</p>}
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          <a href={mapUrl} download>
            Download Map
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
