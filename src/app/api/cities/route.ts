import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()
  const { name, state, mapUrl } = body

  if (!name || !state || !mapUrl) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    const city = await prisma.city.create({
      data: { name, state, mapUrl },
    })
    return NextResponse.json(city, { status: 201 })
  } catch (error) {
    console.error('Error adding city:', error)
    return NextResponse.json({ error: 'Failed to add city' }, { status: 500 })
  }
}
