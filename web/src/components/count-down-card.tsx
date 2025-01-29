import { useEffect, useState } from "react"

interface TimeRemaining {
  hours: number
  minutes: number
  seconds: number
}

const CountDownCard: React.FC = () => {
  const isMonday = new Date().getDay() === 0
  const calculateTimeToNextGame = (): TimeRemaining => {
    const now = new Date()
    const currentHour = now.getHours()

    const gameHours = [10, 13, 16, 19] // Horários dos jogos
    let nextGameHour = gameHours.find((hour) => hour > currentHour)

    // Se for depois das 19h, o próximo jogo é às 10h do dia seguinte
    if (currentHour >= 19) {
      nextGameHour = 10
    }

    // Calcula o tempo restante até o próximo jogo
    const nextGameDate = new Date(now)
    nextGameDate.setHours(nextGameHour || 10, 0, 0, 0)

    if (nextGameHour === 10 && currentHour >= 19) {
      // Adiciona um dia ao próximo jogo se for após as 19h
      nextGameDate.setDate(nextGameDate.getDate() + 1)
    }

    const diff = nextGameDate.getTime() - now.getTime()

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return { hours, minutes, seconds }
  }

  const [time, setTime] = useState<TimeRemaining>(calculateTimeToNextGame())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeToNextGame())
    }, 1000)

    return () => clearInterval(timer) // Limpa o intervalo ao desmontar
  }, [])

  return (
    <div className="flex w-full h-full flex-col gap-1 items-center">
      <div className="radialGradient w-full h-[180px] lg:h-[230px] rounded-3xl flex items-center justify-center">
        <div className="relative h-[147px] w-full object-contain flex items-center justify-center edoSZ text-5xl font-medium text-yellow-400">
          {isMonday ? (
            <img
              src="/placeholders/countdown-placeholder.webp"
              className="absolute w-[200px] h-full object-contain"
            />
          ) : (
            <>
              <span>{String(time.hours).padStart(2, "0")}</span>
              <span>:</span>
              <span>{String(time.minutes).padStart(2, "0")}</span>
              <span>:</span>
              <span>{String(time.seconds).padStart(2, "0")}</span>
            </>
          )}
        </div>
      </div>
      <header className="font-bold text-LT_BLACK flex flex-row lg:flex-col gap-2 mt-3 lg:gap-0 uppercase text-[18px] lg:text-[20px] text-center">
        <h4>Próximo Jogo</h4>
      </header>
    </div>
  )
}

export default CountDownCard
