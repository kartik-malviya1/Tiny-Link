import { UserButton } from "@/components/auth/user-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="bg-secondary/50 flex justify-between items-center p-4 rounded-xl w-[800px] shadow-sm">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href={"/settings"}>Settings</Link>
        </Button>
        <Button asChild variant={pathname === "/server" ? "default" : "ghost"}>
          <Link href={"/user"}>Server</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  )
}

export default Navbar
