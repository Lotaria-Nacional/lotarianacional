import Container from "./container"

import { Link, NavLink } from "react-router-dom"
import { NAVIGATION_LINKS } from "../constants/links"
import MobileMenu from "./mobile/menu/mobile-menu"

import UI from "../components/ui/button/index"
import Logo from "./logo"

const Header = () => {
  return (
    <header className="radialGradient w-full sticky z-[10000] top-0 flex items-center">
      <Container className="flex-row py-4 lg:py0 lg:h-[120px] text-white justify-between">
        <Link to={"/"}>
          <Logo />
        </Link>

        <nav className="lg:flex hidden">
          <ul className="flex items-center lg:gap-2 xl:gap-3">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-yellow-500 text-sm uppercase"
                        : "text-sm uppercase text-LT_WHITE hover:text-yellow-500 transition-color duration-300 ease-in-out"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <UI.Button className="lg:block hidden text-LT_RED-200 hover:scale-[1.1] transition-scale duration-300 ease-in-out hover:bg-yellow-500">
          jogar
        </UI.Button>

        <MobileMenu />
      </Container>
    </header>
  )
}

export default Header
