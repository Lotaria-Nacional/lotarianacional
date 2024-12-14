import {
  SIDEBAR_MENU_LINKS,
  SIDEBAR_BOTTOM_LINKS,
} from "../../constants/sidebar"
import { NavLink } from "react-router-dom"
import { LOGOS } from "../../constants/assets"
import { Button } from "../ui/button"

const Sidebar = () => {
  return (
    <aside className="h-full w-full lg:w-[254px] bg-RED-200 flex flex-col items-start p-4 sticky top-0 lg:static">
      <nav className="flex flex-row lg:flex-col gap-10 grow w-full lg:w-auto justify-between lg:justify-normal">
        <NavLink to={"/"}>
          <img
            alt="logotipo"
            src={LOGOS.white_logo}
            className="object-contain w-32 h-10 lg:w-[148px] lg:h-[57px]"
          />
        </NavLink>
        <ul className="hidden lg:flex flex-col gap-6">
          {SIDEBAR_MENU_LINKS.map((link) => (
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
          ))}
        </ul>
        <hr />

        <ul className="hidden lg:flex flex-col gap-6">
          {SIDEBAR_BOTTOM_LINKS.map((link) => (
            <li key={link.id}>
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
          ))}
        </ul>
      </nav>

      <Button className="text-RED-200 bg-white w-full hidden lg:block">
        Sair
      </Button>
    </aside>
  )
}

export default Sidebar
