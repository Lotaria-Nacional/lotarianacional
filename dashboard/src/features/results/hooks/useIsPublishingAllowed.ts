import { ResultHour } from "../types"
import { useEffect, useMemo, useState } from "react"

export function useIsPublishingAllowed(hour: ResultHour, limitMinutes = 59) {
  const [isAllowed, setIsAllowed] = useState(false)

  const targetTime = useMemo(() => {
    const [targetHour, targetMinutes] = hour.split("H").map(Number)
    const t = new Date()
    t.setHours(targetHour, targetMinutes, 0, 0)
    return t
  }, [hour])

  useEffect(() => {
    const checkTime = () => {
      const now = new Date()
      const diffMinutes = Math.floor(
        (now.getTime() - targetTime.getTime()) / (1000 * 60)
      )
      setIsAllowed(diffMinutes >= 0 && diffMinutes <= limitMinutes)
    }

    checkTime()
    const interval = setInterval(checkTime, 60 * 1000)
    return () => clearInterval(interval)
  }, [targetTime, limitMinutes])

  return { isAllowed }
}
