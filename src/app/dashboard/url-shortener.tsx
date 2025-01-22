"use client"

import { useState, FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { shortenUrl } from "@/actions/shorten-url"
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function UrlShortener() {
  const [inputUrl, setInputUrl] = useState("")
  const [customUrl, setCustomUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputUrl) return

    setIsLoading(true)
    try {
      const response = await shortenUrl({
        originalUrl: inputUrl,
        userId: session?.user?.id as string,
        customUrl: customUrl || undefined,
      })

      if (response.error) {
        toast.error(response.error)
      } else if (response.success) {
        toast.success(response.success)
        setInputUrl("")
        setCustomUrl("")
        router.refresh()
      }
    } catch  {
      toast.error("Something went wrong!")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shorten New URL</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="originalUrl">Original URL</Label>
            <Input
              id="originalUrl"
              type="url"
              placeholder="Enter your URL here"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="customUrl">
              Custom URL (optional)
            </Label>
            <div className="flex gap-2 items-center">
              <span className="text-sm text-muted-foreground">
                {window.location.origin}/
              </span>
              <Input
                id="customUrl"
                placeholder="your-custom-url"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                disabled={isLoading}
                className="flex-1"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading || !inputUrl}
            className="w-full bg-green-600 text-white"
          >
            {isLoading ? "Shortening..." : "Shorten URL"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 