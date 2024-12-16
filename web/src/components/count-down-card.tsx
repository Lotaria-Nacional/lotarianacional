import { useEffect, useState } from "react"

const CountDownCard = () => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const calculateNextInterval = () => {
      const now = new Date()
      const currentHour = now.getHours()

      // Adiciona 2 horas ao tempo atual
      now.setHours(now.getHours() + 2)

      if (currentHour >= 19 || currentHour < 10) {
        // Se for entre 19h e 10h, define o próximo intervalo para 10h do dia seguinte
        let nextDay = new Date()
        if (currentHour >= 19) {
          nextDay.setDate(now.getDate() + 1) // Avança para o próximo dia
        }
        nextDay.setHours(10, 0, 0, 0) // Define para 10h do próximo dia
        return nextDay.getTime() - now.getTime() // Retorna o tempo restante em milissegundos
      } else {
        // Caso contrário, calcula o próximo intervalo de 3h
        const nextHour = Math.ceil(now.getHours() / 3) * 3 // Próxima hora múltipla de 3
        const nextInterval = new Date()
        nextInterval.setHours(nextHour, 0, 0, 0)
        return nextInterval.getTime() - now.getTime() // Retorna o tempo restante em milissegundos
      }
    }

    const updateCountdown = () => {
      const interval = calculateNextInterval()
      const intervalInSeconds = Math.floor(interval / 1000)

      setHours(Math.floor(intervalInSeconds / 3600)) // Horas restantes
      setMinutes(Math.floor((intervalInSeconds % 3600) / 60)) // Minutos restantes
      setSeconds(intervalInSeconds % 60) // Segundos restantes
    }

    const timer = setInterval(() => {
      if (hours > 0 || minutes > 0 || seconds > 0) {
        setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 59))
        if (seconds === 0) {
          setMinutes((prevMinutes) => (prevMinutes > 0 ? prevMinutes - 1 : 59))
          if (minutes === 0) {
            setHours((prevHours) => (prevHours > 0 ? prevHours - 1 : 0))
          }
        }
      } else {
        updateCountdown() // Recalcula o próximo intervalo
      }
    }, 1000)

    updateCountdown() // Inicializa o tempo ao montar o componente

    return () => clearInterval(timer) // Limpa o intervalo ao desmontar o componente
  }, [hours, minutes, seconds])

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
