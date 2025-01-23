"use client"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in (adjust based on your auth method)
    const checkAuth = () => {
      const token = localStorage.getItem('token') // or your auth check
      setIsLoggedIn(!!token)
    }
    
    checkAuth()
  }, [])

  const handleLogout = () => {
    // Implement logout logic here
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    // Add any additional logout logic (e.g., redirect)
  }

  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="h-16 flex items-center justify-between">
          <Link href={"/"} className="flex z-100 font-semibold text-xl">
            <span className="text-gray-300">
              Tiny<span className="text-green-500 font-mono">Link</span>
            </span>
          </Link>

          <div className="h-full flex items-center space-x-2">
            {isLoggedIn ? (
              <>
                <Button asChild variant="ghost">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/profile">Profile</Link>
                </Button>
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="border border-green-600 hover:border-gray-900"
                >
                  <span className="text-green-500">Logout</span>
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link href={"/auth/login"}>Login</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border border-green-600 hover:border-gray-900"
                >
                  <Link href={"/auth/sign-up"} className="text-green-500">
                    Sign up
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
