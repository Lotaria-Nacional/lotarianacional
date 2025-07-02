import Logo from "../common/logo";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "../mobile/menu/mobile-menu";
import { NAVIGATION_LINKS } from "@/app/router/navigation";
import { PageBody } from "./page-body";

const Header = () => {
  return (
    <header className="bg-[#b51817] border-b border-b-white w-full sticky text-base z-500 top-0 flex items-center">
      <PageBody.Container className="flex-row py-4 lg:py0 lg:h-[120px] text-white justify-between">
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

        <div className="items-center gap-4 hidden">
          {/* <Button className="bg-yellow-400 text-black uppercase px-10 font-semibold hover:bg-yellow-500 duration-200 ease-in-out transition-all">
            Jogar
          </Button> */}
        </div>

        <MobileMenu />
      </PageBody.Container>
    </header>
  );
};

export default Header;
