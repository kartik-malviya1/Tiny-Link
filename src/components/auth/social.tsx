"use client"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant={"secondary"}>
        <FcGoogle style={{ width: "22px", height: "22px" }} />
      </Button>
      <Button size="lg" className="w-full" variant={"secondary"}>
        <FaGithub style={{ width: "22px", height: "22px" }} />
      </Button>
    </div>
  )
}
