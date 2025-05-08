import { MOBILE_NAVBAR, RoleType } from "@/constants/links"
import { NavLink } from "react-router-dom"
import Icon from "../ui/icon"
import { useAuth } from "@/context/auth-context"
import Button from "../ui/lottary-button"
import { LogOut } from "lucide-react"

export default function MobileMenu() {
  const { user, logout } = useAuth()

  return (
    <ul className="absolute z-10 bottom-[80px] animate-fade-in flex flex-col gap-2 right-4 bg-LT-RED-200 rounded-xl w-[240px]">
      {MOBILE_NAVBAR[1]
        .filter((link) => link.allowedRoles.includes(user!.role as RoleType))
        .map((link, index) => (
          <li
            key={index}
            className="w-full grow flex items-center justify-start border-b border-b-LT-GRAY-100"
          >
            <NavLink
              to={link.link}
              className={({ isActive }) =>
                `flex flex-1 items-center gap-3 p-4 text-lg ${
                  isActive ? "text-LT-YELLOW" : "text-white"
                }`
              }
            >
              <Icon name={link.icon} />
              <span className="text-base">{link.label}</span>
            </NavLink>
          </li>
        ))}
      <li className="w-full grow flex items-center justify-start pl-3 py-2">
        <Button onClick={() => logout()}>
          <LogOut size={14} />
          Sair
        </Button>
      </li>
    </ul>
  )
}
