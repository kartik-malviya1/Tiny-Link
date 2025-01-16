"use client"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export const Social = () => {
  const onClick = async (provider: "google" | "github") => {
    try {
      await signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
      })
    } catch (error) {
      console.error("Sign in error:", error)
    }
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant={"secondary"}
        onClick={() => onClick("google")}
      >
        <FcGoogle style={{ width: "22px", height: "22px" }} />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant={"secondary"}
        onClick={() => onClick("github")}
      >
        <FaGithub style={{ width: "22px", height: "22px" }} />
      </Button>
    </div>
  )
}
