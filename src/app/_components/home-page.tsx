"use client"

import { useState, useEffect } from "react"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays, Link2, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import user1 from "../../../public/users/user-1.png"
import user2 from "../../../public/users/user-2.png"
import user3 from "../../../public/users/user-3.png"
import user4 from "../../../public/users/user-4.jpg"
import portfolio from "../../../public/portfolio-QR.png"
import dashboardimg from "../../../public/dashboard-img.png"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const HomePage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative py-16 mt-6 sm:py-14 overflow-hidden">
      <MaxWidthWrapper className="flex flex-col lg:flex-row justify-between items-center">
        <motion.div
          className="relative flex flex-col mb-12 lg:mb-0 lg:mr-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex max-w-2xl flex-col items-start select-none">
            <motion.div
              className="mb-8 flex"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="https://github.com/kartik-malviya1/Tiny-Link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#166600_0%,#166626_50%,#166646_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-green-500 backdrop-blur-xl bg-primary-foreground">
                    Let&apos;s make with simply one click. 👈
                    <span className="inline-flex items-center pl-2">
                      Read more <ArrowRight className="pl-0.5" size={16} />
                    </span>
                  </div>
                </span>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-pretty font-heading tracking-normal font-semibold text-gray-300">
              Bio Link & Link
              <br />
              <span className="">
                Shortner for <br />
              </span>{" "}
              Business Needs
            </h1>
            <p className="tracking-normal text-pretty text-gray-400 text-sm py-6 px-1 mt-2">
              On a single platform, you&apos;ll find all the tools you need to
              connect your <br /> audience, Manage links and QR Codes
            </p>
          </motion.div>
          <motion.div
            className="mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              asChild
              size={"lg"}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Link href="/auth/sign-up">Get Started For Free </Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 items-center flex select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex -space-x-4">
              {[user1, user2, user3, user4].map((user, index) => (
                <Image
                  src={user || "/placeholder.svg"}
                  key={index}
                  alt={`user ${index + 1}`}
                  width={100}
                  height={100}
                  className="inline-block h-6 w-6 md:h-10 md:w-10 rounded-full ring-2 ring-green-500"
                />
              ))}
            </div>
            <div className="flex flex-col ml-4 items-center md:items-start gap-1">
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, index) => (
                  <Star
                    key={index}
                    className="flex w-3 h-3 md:h-4 md:w-4 fill-orange-500 text-orange-500"
                  />
                ))}
                <Star className="flex w-3 h-3 md:h-4 md:w-4 text-orange-500" />
                <p className="font-medium ml-0.5 text-sm">4.0</p>
              </div>
              <p className="text-sm font-normal text-gray-400">
                from 500+ reviews
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative w-full max-w-md lg:max-w-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex flex-col gap-6 items-start select-none">
            <Card className="h-fit p-4 flex flex-col w-full">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-sm">QR CODE</h1>
                  <Button className="text-white bg-green-600 px-2 py-2 text-xs sm:text-sm hover:bg-green-700">
                    <a href={"/portfolio-QR.png"} download={"Scan it ;)"}>
                      Download PNG
                    </a>
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <div>
                    <Image
                      src={portfolio || "/placeholder.svg"}
                      alt="QR Code"
                      className="h-24 w-24"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4 mt-4 sm:mt-0 sm:ml-10">
                    <div className="flex space-x-2.5 text-sm font-normal text-center">
                      <Link2 className="w-5 h-5 text-green-500" />
                      <p className="font-light">https://tinylink.in/kartik</p>
                    </div>
                    <div className="flex space-x-2.5 text-sm font-normal text-center">
                      <CalendarDays className="w-5 h-5 text-green-500" />
                      <p className="font-light">28 January 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="absolute top-40 right-10 hidden lg:block">
              <Link2 className="w-16 h-16 rounded-full bg-green-600 p-4" />
            </div>
            <Card className="max-h-fit w-full p-4">
              <div className="flex flex-col mt-2">
                <h1 className="text-sm font-normal">CUSTOM YOUR LINK</h1>
                <div className="w-full bg-gray-800/40 px-4 py-2 rounded-lg mt-4">
                  <div className="flex justify-center py-1">
                    <Image
                      src={dashboardimg || "/placeholder.svg"}
                      alt="Dashboard"
                      className="object-cover rounded-md w-full max-w-[240px]"
                    />
                  </div>
                </div>
                <Card className="flex gap-2 rounded-md p-2 mt-3">
                  <Link2 className="text-green-500" />
                  <p className="text-sm">
                    <span className="text-green-500">short.</span>
                    link/kartik
                  </p>
                </Card>
              </div>
            </Card>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </main>
  )
}

export default HomePage
