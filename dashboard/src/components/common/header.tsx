import Container from "./container"
import { LOGOS } from "../../constants/assets"
import NotificationButton from "./notification-button"
import { useAuth } from "@/context/authContext"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Header = () => {
  const { user } = useAuth()
  return (
    <header className="hidden lg:block border-b border-b-GRAY-100">
      <Container className="bg-white z-50 h-[60px] lg:h-[88px] flex items-center justify-start lg:justify-between">
        <div />
        <img
          src={LOGOS.loto590}
          alt="loto 5/90 ícone"
          className="object-contain aspect-square hidden lg:block"
        />
        <div className="flex items-center gap-2">
          <NotificationButton />

          <Avatar className="size-7">
            {user?.profilePic && (
              <AvatarImage src={user.profilePic as string} />
            )}
            <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm">{user?.name}</span>
        </div>
      </Container>
    </header>
  )
}

export default Header
