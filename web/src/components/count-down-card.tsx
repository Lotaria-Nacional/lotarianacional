import { useEffect, useState } from "react"

const CountDownCard = () => {
  const [hours, setHours] = useState(6)
  const [minutes, setMinutes] = useState(60)
  const [seconds, setSeconds] = useState(60)

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1)
      } else if (minutes > 0) {
        setMinutes((prevMinutes) => prevMinutes - 1)
        setSeconds(59)
      } else if (hours > 0) {
        setHours((prevHours) => prevHours - 1)
        setMinutes(59)
        setSeconds(59)
      } else {
        clearInterval(timer) // Para o timer quando o tempo acaba
      }
    }, 1000)

    return () => clearInterval(timer) // Limpa o intervalo ao desmontar o componente
  }, [seconds, minutes, hours])

  return (
    <div className="flex w-full h-full flex-col gap-2 items-center">
      <div className="radialGradient w-full h-[230px] rounded-3xl flex items-center justify-center">
        <div className="h-[147px] w-full object-contain flex items-center justify-center text-5xl font-medium text-white">
          <span>{hours}</span>
          <span>h</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
      </div>
      <header className="font-bold text-LT_BLACK uppercase text-[28px] text-center">
        <h4>Próximo</h4>
        <h4>Jogo</h4>
      </header>
    </div>
  )
}

export default CountDownCard
