import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../ui/navigation-menu";
import Logo from "../common/logo";
import { PageBody } from "./page-body";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "../mobile/menu/mobile-menu";
import { navigationLinks } from "@/app/router/navigation";

const Header = () => {
  return (
    <header className="bg-LT_RED-100 border-b border-b-white w-full sticky text-base z-40 top-0 flex items-center">
      <PageBody.Container className="flex-row py-4 lg:py0 lg:h-[120px] text-white justify-between">
        <Link reloadDocument to={"/"}>
          <Logo />
        </Link>

        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {navigationLinks.map((nav) =>
              nav.submenu ? (
                <NavigationMenuItem key={nav.id}>
                  <NavigationMenuTrigger>{nav.label}</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-red-400">
                    {nav.submenu.map((sub) => (
                      <NavigationMenuLink asChild key={sub.id}>
                        <NavLink to={sub.link}>{sub.label}</NavLink>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={nav.id}>
                  <NavigationMenuLink asChild>
                    <NavLink to={nav.link}>{nav.label}</NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <MobileMenu />
      </PageBody.Container>
    </header>
  );
};

export default Header;
