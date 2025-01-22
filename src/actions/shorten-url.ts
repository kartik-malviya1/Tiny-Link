"use server"

import { UrlSchema } from "@/schemas"
import * as z from "zod"
import db from "@/lib/db"
import { nanoid } from "nanoid"

export const shortenUrl = async (values: z.infer<typeof UrlSchema>) => {
  try {
    const validatedFields = UrlSchema.safeParse(values)

    if (!validatedFields.success) {
      return { error: "Invalid URL" }
    }

    const { originalUrl, userId, customUrl } = validatedFields.data
    const shortCode = nanoid(8)

    // Check if custom URL is already taken
    if (customUrl) {
      const existingUrl = await db.url.findFirst({
        where: {
          OR: [
            { shortUrl: customUrl },
            { customUrl: customUrl }
          ]
        }
      })

      if (existingUrl) {
        return { error: "Custom URL is already taken" }
      }
    }

    const shortenedUrl = await db.url.create({
      data: {
        originalUrl,
        shortUrl: customUrl || shortCode,
        customUrl: customUrl || shortCode,
        userId,
      },
    })

    return { success: "URL shortened successfully!", shortCode: shortenedUrl.shortUrl }
  } catch {
    return { error: "Something went wrong!" }
  }
} 