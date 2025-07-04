import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../ui/navigation-menu"
import Logo from "../common/logo"
import { PageBody } from "./page-body"
import { Link, NavLink } from "react-router-dom"
import MobileMenu from "../mobile/menu/mobile-menu"
import { navigationLinks } from "@/app/router/navigation"

const Header = () => {
  return (
    <header className="bg-LT_RED-100 border-b border-b-white w-full sticky text-base z-40 top-0 flex items-center">
      <PageBody.Container className="flex-row py-4 lg:py0 lg:h-[120px] text-white justify-between">
        <Link reloadDocument to={"/"}>
          <Logo />
        </Link>
        <div className="hidden lg:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="!gap-0">
              {navigationLinks.map((nav) =>
                nav.submenu ? (
                  <NavigationMenuItem key={nav.id}>
                    <NavigationMenuTrigger className="uppercase !text-[14px] cursor-pointer">
                      {nav.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {nav.submenu.map((sub) => (
                        <NavigationMenuLink
                          asChild
                          key={sub.id}
                          className="uppercase !text-[14px]"
                        >
                          <NavLink
                            className="w-fit text-nowrap shrink-0"
                            to={sub.link}
                          >
                            {sub.label}
                          </NavLink>
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={nav.id}>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to={nav.link}
                        className={"uppercase !text-[14px]"}
                      >
                        {nav.label}
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <MobileMenu />
      </PageBody.Container>
    </header>
  )
}

export default Header
