import { LOGOS } from "@/constants/assets"
import { NavLink } from "react-router-dom"
import LogoutButton from "@/components/auth/logout-button"
import { EDITOR_SIDEBAR_MENU_LINKS } from "@/constants/sidebar"
import MobileMenuButton from "@/components/mobile/mobile-menu-button"

const EditorSidebar = () => {
  return (
    <aside className="h-full w-full lg:w-[254px] bg-RED-200 flex flex-col items-start p-4 sticky z-50 top-0 lg:static">
      <nav className="flex flex-row lg:flex-col gap-6 grow w-full lg:w-auto justify-between lg:justify-normal">
        <NavLink to={"/"}>
          <img
            alt="logotipo"
            src={LOGOS.white_logo}
            className="object-contain w-32 h-10 lg:w-[148px] lg:h-[57px]"
          />
        </NavLink>

        <ul className="hidden lg:flex mt-8 flex-col gap-6">
          {EDITOR_SIDEBAR_MENU_LINKS.map((link) => {
            return (
              <li key={link.id} className="w-full">
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 text-YELLOW hover:text-white duration-300 ease-in-out transition-all"
                      : "flex items-center gap-3 text-white hover:text-YELLOW duration-300 ease-in-out transition-all"
                  }
                >
                  <img
                    src={link.icon}
                    alt={link.label + " ícone"}
                    className="aspect-square object-contain "
                  />
                  {link.label}
                </NavLink>
              </li>
            )
          })}
        </ul>

        <MobileMenuButton />
      </nav>

      <LogoutButton />
    </aside>
  )
}

export default EditorSidebar
