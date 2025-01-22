"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Copy, 
  MousePointerClick,
  Trash2
} from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteUrl } from "@/actions/delete-url"
import { useRouter } from "next/navigation"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

interface Click {
  id: number
  city?: string | null
  country?: string | null
  device?: string | null
}

interface Url {
  id: number
  originalUrl: string
  shortUrl: string
  customUrl: string
  createdAt: Date
  click: Click[]
}

interface DashboardClientProps {
  urls: Url[]
}

export function DashboardClient({ urls }: DashboardClientProps) {
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const router = useRouter()

  const copyToClipboard = async (shortUrl: string, id: number) => {
    const fullShortUrl = `${window.location.origin}/${shortUrl}`
    await navigator.clipboard.writeText(fullShortUrl)
    setCopiedId(id)
    toast.success("URL copied to clipboard!")
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDelete = async (urlId: number) => {
    setDeletingId(urlId)
    try {
      const response = await deleteUrl(urlId)
      if (response.error) {
        toast.error(response.error)
      } else if (response.success) {
        toast.success(response.success)
        router.refresh()
      }
    } catch  {
      toast.error("Failed to delete URL")
    } finally {
      setDeletingId(null)
    }
  }

  return (

    <div className="grid gap-4 md:grid-cols-2">
      {urls.map((url) => (
        <Card key={url.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-1">
              <p className="text-sm font-medium">
                {url.originalUrl.length > 50
                  ? url.originalUrl.substring(0, 50) + "..."
                  : url.originalUrl}
              </p>
              <p className="text-sm text-muted-foreground">
                {`${window.location.origin}/${url.shortUrl}`}
              </p>
              <p className="text-xs text-muted-foreground">
                Clicks: {url.click.length}
              </p>
            </div>
            
            <div className="flex items-center justify-between gap-2 pt-2">
              <div className="flex items-center gap-2">
                <MousePointerClick className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {url.click.length} clicks
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(url.shortUrl, url.id)}
                >
                  {copiedId === url.id ? (
                    "Copied!"
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="destructive"
                      disabled={deletingId === url.id}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete URL</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this shortened URL? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(url.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 