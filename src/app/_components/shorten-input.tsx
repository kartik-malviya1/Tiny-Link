"use client"

import { useState, FormEvent } from "react"
import { motion } from "framer-motion"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

const ShortenInput = () => {
  const router = useRouter()
  const [inputUrl, setInputUrl] = useState("")
  const { data: session } = useSession()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputUrl) return

    if (!session) {
      // Redirect to sign-up with the URL as a parameter
      router.push(`/auth/sign-up?callbackUrl=${encodeURIComponent(inputUrl)}`)
      return
    }

    // Handle URL shortening for authenticated users
    router.push(`/auth/create-new?url=${encodeURIComponent(inputUrl)}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 max-w-screen-xl mx-auto"
    >
      <MaxWidthWrapper className="py-12 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="uppercase font-semibold text-2xl sm:text-3xl lg:text-4xl text-gray-300 text-center lg:text-left"
          >
            Shorten Your Link Now
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-1"
          >
            <div className="flex w-full sm:w-[27rem] flex-col">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="url"
                  value={inputUrl}
                  onChange={(e)=>setInputUrl(e.target.value)}
                  className="w-full min-h-12 bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-400 rounded-lg px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Enter your link here"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    disabled={!inputUrl}
                    className="h-12 bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
                  >
                    <motion.p
                      className="flex items-center gap-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      Short Link <ArrowRight className="w-5 h-5" />
                    </motion.p>
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="border border-t-0 border-r-0 border-l-0 max-w-[1130px] mx-auto mt-14"
      />
    </motion.div>
  )
}

export default ShortenInput
