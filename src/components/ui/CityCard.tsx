import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CityCard({ name, state, mapUrl, category, size, image }: any) {
  return (
    <Card className="min-h-[200px] flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-blue-700 text-lg flex items-center gap-2">
          <span className="text-xl">{image || '🗺️'}</span> {name}
        </CardTitle>
        <CardDescription>{state}</CardDescription>
      </CardHeader>

      <CardContent>
        {category && (
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            {category}
          </span>
        )}
        {size && (
          <p className="text-xs text-gray-500 mt-1">Size: {size}</p>
        )}
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <a href={mapUrl} download>Download Map</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
