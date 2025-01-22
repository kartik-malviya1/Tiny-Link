"use client"

import Navbar from "./_components/navbar"

interface ProtectedLayoutProps {
  children: React.ReactNode
}
const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-y-4 sm:gap-y-10 justify-center p-4">
      <Navbar />
      {children}
    </div>
  )
}

export default ProtectedLayout
