"use client"

import { logout } from "@/actions/logout"
import { Button } from "@/components/ui/button"
import { useCurrentUser } from "@/hooks/use-current-user"
import React from "react"

const Settings = () => {
  const user = useCurrentUser()
  const onClick = () => {
    logout()
  }
  return (
    <div>
      {JSON.stringify(user)}
      <Button onClick={() => onClick()} type="submit">
        Sign Out
      </Button>
    </div>
  )
}

export default Settings
