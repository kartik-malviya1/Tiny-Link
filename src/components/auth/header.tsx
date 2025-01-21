import { cn } from "@/lib/utils"

interface HeaderProps {
  label: string
}
export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold")}>
        <span className="text-gray-300">
          Tiny<span className="text-green-500 font-mono">Link</span>
        </span>
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}
