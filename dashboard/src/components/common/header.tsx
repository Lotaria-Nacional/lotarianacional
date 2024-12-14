import Container from "./container"
import { LOGOS } from "../../constants/assets"
import NotificationButton from "./notification-button"

const Header = () => {
  return (
    <header className="border-b border-b-GRAY-100">
      <Container className="bg-white z-50 h-[60px] lg:h-[88px] flex items-center justify-start lg:justify-between">
        <div />
        <img
          src={LOGOS.loto590}
          alt="loto 5/90 ícone"
          className="object-contain aspect-square hidden lg:block"
        />
        <div className="flex items-center gap-2">
          <NotificationButton />
          <div className="size-6 rounded-full bg-zinc-300" />
          <span className="font-semibold text-sm">Sebastião António</span>
        </div>
      </Container>
    </header>
  )
}

export default Header
