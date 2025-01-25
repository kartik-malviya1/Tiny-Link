import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { DashboardClient } from "./dashboard-client"
import { UrlShortener } from "./url-shortener"
import db from "@/lib/db"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import Navbar from "../_components/header"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/auth/login")
  }

  const urls = await db.url.findMany({
    where: {
      userId: session.user?.id,
    },
    include: {
      click: true, // Include click data
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <div className="container mx-auto p-6 space-y-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your shortened URLs and create new ones.
            </p>
          </div>

          <UrlShortener />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Your URLs</h2>
            <DashboardClient urls={urls} />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
