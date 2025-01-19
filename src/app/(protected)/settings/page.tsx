"use client"

import { logout } from "@/actions/logout"
import { Button } from "@/components/ui/button"
import React from "react"

const Settings = () => {
  const onClick = () => {
    logout()
  }
  return (
    <div>
      <Button onClick={() => onClick()} type="submit">
        Sign Out
      </Button>
    </div>
  )
}

export default Settings
