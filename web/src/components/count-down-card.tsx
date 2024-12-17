import { useEffect, useState } from "react"

const CountDownCard = () => {
  const [hours, setHours] = useState(3) // Inicia com 3 horas
  const [minutes, setMinutes] = useState(0) // Inicia com 0 minutos
  const [seconds, setSeconds] = useState(0) // Inicia com 0 segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) return prevSeconds - 1

        setMinutes((prevMinutes) => {
          if (prevMinutes > 0) return prevMinutes - 1

          setHours((prevHours) => {
            if (prevHours > 0) return prevHours - 1

            clearInterval(timer) // Para o countdown ao chegar em 0
            return 0
          })

          return 59
        })

        return 59
      })
    }, 1000)

    return () => clearInterval(timer) // Limpa o timer ao desmontar
  }, [])
  return (
    <div className="flex w-full h-full flex-col gap-2 items-center">
      <div className="radialGradient w-full h-[180px] lg:h-[230px] rounded-3xl flex items-center justify-center">
        <div className="h-[147px] w-full object-contain flex items-center justify-center text-5xl font-medium text-white">
          <span>{hours}</span>
          <span>h</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
      </div>
      <header className="font-bold text-LT_BLACK flex flex-row lg:flex-col gap-2 mt-3 lg:gap-0 uppercase text-[28px] text-center">
        <h4>Próximo</h4>
        <h4>Jogo</h4>
      </header>
    </div>
  )
}

export default CountDownCard
