import Logo from "./logo"

import Container from "./container"
import { Link, NavLink } from "react-router-dom"
import MobileMenu from "../mobile/menu/mobile-menu"
import { NAVIGATION_LINKS } from "../../constants/links"

const Header = () => {
  return (
    <header className="bg-[#b51817] border-b border-b-white w-full sticky text-base z-[500] top-0 flex items-center">
      <Container className="flex-row py-4 lg:py0 lg:h-[120px] text-white justify-between">
        <Link reloadDocument to={"/"}>
          <Logo />
        </Link>

        <nav className="lg:flex hidden">
          <ul className="flex items-center lg:gap-2 xl:gap-3">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.id}>
                <NavLink
                  reloadDocument
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
        <MobileMenu />
      </Container>
    </header>
  )
}

export default Header
