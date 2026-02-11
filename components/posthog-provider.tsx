"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import "@/instrumentation-client"
import { trackPageViewLanding } from "@/lib/analytics"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname || pathname !== "/") {
      return
    }
    trackPageViewLanding("landing")
  }, [pathname])

  return <>{children}</>
}
