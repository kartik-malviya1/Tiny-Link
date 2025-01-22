"use server"

import db from "@/lib/db"
import { auth } from "@/auth"

export const deleteUrl = async (urlId: number) => {
  try {
    const session = await auth()

    if (!session) {
      return { error: "Unauthorized" }
    }

    // Verify the URL belongs to the user
    const url = await db.url.findUnique({
      where: {
        id: urlId,
        userId: session.user?.id,
      },
    })

    if (!url) {
      return { error: "URL not found" }
    }

    // Delete the URL
    await db.url.delete({
      where: {
        id: urlId,
      },
    })

    return { success: "URL deleted successfully" }
  } catch {
    return { error: "Failed to delete URL" }
  }
} 