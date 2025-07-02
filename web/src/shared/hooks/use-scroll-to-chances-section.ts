import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

export function useScrollToChancesSection() {
  const { hash } = useLocation()
  const chancesSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (hash === "#chances" && chancesSectionRef.current) {
      const { top, left } = chancesSectionRef.current.getBoundingClientRect()
      window.scrollTo({
        behavior: "smooth",
        top: window.scrollY + top,
        left: window.scrollX + left,
      })
    }
  }, [hash])

  return { chancesSectionRef }
}
