import { UserButton } from "@/components/auth/user-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="bg-secondary/50 flex flex-col sm:flex-row justify-between items-center p-4 rounded-xl w-full max-w-[800px] shadow-sm gap-4">
      <div className="flex gap-2 flex-wrap justify-center">
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
          className="w-[100px]"
        >
          <Link href={"/settings"}>Settings</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
          className="w-[100px]"
        >
          <Link href={"/server"}>Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
          className="w-[100px]"
        >
          <Link href={"/client"}>Client</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  )
}

export default Navbar
