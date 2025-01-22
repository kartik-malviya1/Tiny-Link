import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SessionProvider } from "next-auth/react"
import Navbar from "./_components/header"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tiny Link",
  description: "Url Shortner",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Navbar />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
