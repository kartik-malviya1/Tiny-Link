"use client"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="h-16 flex items-center justify-between">
          <Link href={"/"} className="flex z-40 font-semibold text-xl">
            <span className="text-gray-300">
              Tiny<span className="text-green-500 font-mono">Link</span>
            </span>
          </Link>

          <div className="h-full flex items-center space-x-2 ">
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
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
