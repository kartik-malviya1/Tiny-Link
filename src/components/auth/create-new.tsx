"use client"

import { useEffect, useCallback } from "react"
import { useSession } from "next-auth/react"
import { useSearchParams, useRouter } from "next/navigation"
import { shortenUrl } from "@/actions/shorten-url"
import { toast } from "sonner"

const CreateNew = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { data: session, status } = useSession()

  const url = searchParams.get("url")

  const handleUrlShortening = useCallback(async (urlToShorten: string) => {
    const response = await shortenUrl({
      originalUrl: urlToShorten,
      userId: session?.user?.id as string,
    })

    if (response.error) {
      toast.error(response.error)
      router.push("/")
      return
    }

    if (response.success) {
      toast.success(response.success)
      router.push("/dashboard")
      window.location.reload()
    }
  }, [router, session])

  useEffect(() => {
    if (status === "loading") return

    if (!session) {
      // If not authenticated, redirect to sign-up with the URL
      router.push(`/auth/sign-up?callbackUrl=${encodeURIComponent(url || "")}`)
      return
    }

    if (!url) {
      // If no URL is provided, redirect to home
      router.push("/")
      return
    }

    // Call handleUrlShortening if a URL is present
    if (url) {
      handleUrlShortening(url)
    }
  }, [session, url, router, status, handleUrlShortening])

  return null
}

export default CreateNew
