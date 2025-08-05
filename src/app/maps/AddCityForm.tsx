'use client'

import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import CityCard from '../components/CityCard'

export default function MapsPage() {
  const [name, setName] = useState('')
  const [state, setState] = useState('')
  const [mapUrl, setMapUrl] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/cities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, state, mapUrl }),
    })

    if (res.ok) {
      setMessage('✅ City added successfully!')
      setName('')
      setState('')
      setMapUrl('')
    } else {
      setMessage('❌ Failed to add city.')
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-2">Offline City Maps</h1>
      <p className="text-center text-gray-400 mb-8">
        Download detailed offline maps of India’s most important cities — heritage sites,
        food destinations, and more.
      </p>

      {/* Add City Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#1a1a1a] p-6 rounded-xl mb-10 border border-gray-700 space-y-4">
        <div>
          <Label htmlFor="name">City Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input id="state" value={state} onChange={(e) => setState(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="mapUrl">Map URL (PDF)</Label>
          <Input id="mapUrl" value={mapUrl} onChange={(e) => setMapUrl(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">Add City</Button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <CityCard
          name="Jaipur"
          state="Rajasthan"
          mapUrl="/maps/jaipur.pdf"
          category="Heritage City"
          size="2.1MB"
          image="/maps/jaipur-banner.jpg"
          date="15 Sep 2025, 10:00 AM"
        />
        <CityCard
          name="New Delhi"
          state="New Delhi"
          mapUrl="/maps/delhi.pdf"
          category="Capital City"
          size="2.3MB"
          image="/maps/delhi-banner.jpg"
          date="12 Sep 2025, 06:30 AM"
        />
      </div>
    </div>
  )
}
