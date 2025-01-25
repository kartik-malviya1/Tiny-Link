import { NextRequest, NextResponse } from "next/server"
import db from "@/lib/db"

export async function GET(
  req: NextRequest,
  { params }: { params: { shortUrl: string } }
) {
  try {
    const shortUrl = params.shortUrl

    // Find the URL in the database
    const url = await db.url.findUnique({
      where: { shortUrl, OR: [{ shortUrl }, { customUrl: shortUrl }] },
    })

    if (!url) {
      // If URL not found, redirect to home page or show error
      return new NextResponse("URL not found", { status: 404 })
    }

    // Create click record with available information
    await db.click.create({
      data: {
        id: Math.floor(Math.random() * 1000000),
        urlId: url.id,

        // You can add more tracking data here like:
        device: req.headers.get("user-agent") || undefined,
        country: req.headers.get("cf-ipcountry") || undefined,
      },
    })

    // Redirect to the original URL
    return NextResponse.redirect(url.originalUrl)
  } catch (error) {
    console.error("Error processing redirect:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
