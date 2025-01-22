import { NextRequest, NextResponse } from "next/server"
import db from "@/lib/db"

export async function GET(
  req: NextRequest,
  { params }: { params: { shortUrl: string } }
) {
  try {
    const shortUrl = params.shortUrl

    const url = await db.url.findUnique({
      where: { shortUrl },
    })

    if (!url) {
      return new NextResponse("Not Found", { status: 404 })
    }

    // Create click record
    await db.click.create({
      data: {
        id: Math.floor(Math.random() * 1000000), // Generate a random ID
        urlId: url.id,
        // You can add more click data here like device, country, etc.
      },
    })

    return NextResponse.redirect(url.originalUrl)
  } catch {
    return new NextResponse("Internal Error", { status: 500 })
  }
} 