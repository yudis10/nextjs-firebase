"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

const navLinks = siteConfig.mainNav

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center gap-2 outline-gray-400">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <nav className="flex gap-6">
        {navLinks?.map((item, index) => {
          const isActive =
            (pathname.includes(item.href) && item.href.length > 1) ||
            pathname === item.href
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground outline-gray-400",
                isActive && "font-bold underline"
              )}
            >
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
