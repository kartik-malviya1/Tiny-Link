import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const HomePage = () => {
  return (
    <main className="relative py-24 sm:py-18">
      <MaxWidthWrapper className="space-y-8">
        <div className=" relative flex flex-col">
          <div className="relative flex max-w-2xl flex-col items-start">
            <div className="mb-8 flex">
              <a
                href="https://github.com/kartik-malviya1/Tiny-Link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#166600_0%,#166626_50%,#166646_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-green-500 backdrop-blur-xl bg-primary-foreground">
                    Let&apos;s make with simply one click. 👈
                    <span className="inline-flex items-center pl-2">
                      Read more <ArrowRight className="pl-0.5" size={16} />
                    </span>
                  </div>
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-5xl sm:text-6xl text-pretty font-heading tracking-normal font-semibold text-gray-300">
              Bio Link & Link
              <br />
              <span className="">
                Shortner For <br />
              </span>{" "}
              Business Needs
            </h1>
            <p className="tracking-normal text-pretty text-gray-400 text-sm py-6 px-1 mt-2">
              On a single platform, you&apos;ll find all the tools you need to
              connect
              <br />
              audience, Manage links and QR Codes{" "}
            </p>
          </div>
          <div>
            <Button asChild variant={"default"} size={"lg"}>
              <Link
                href="/auth/sign-up"
                className="bg-green-600 text-white hover:bg-green-700"
              >
                Get Started For Free{" "}
              </Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}

export default HomePage
