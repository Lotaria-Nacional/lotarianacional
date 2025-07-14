import { IMAGE } from "@/assets";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/app/context/auth-context";
import {
  BOTTOM_NAV_LINKS_V2,
  RoleType,
  UP_NAV_LINKS,
} from "@/app/constants/links";
import Icon from "../ui/icon";
import Button from "../ui/lottary-button";

export default function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <aside className="min-w-[240px] max-w-[240px] hidden lg:block">
      <div className=" main bg-LT-RED-200 fixed h-screen items-center py-4 w-[240px] hidden lg:flex flex-col gap-10 z-50">
        <img src={IMAGE.logo} alt="Logotipo" className="w-[110px]" />
        <ul className="flex flex-col gap-1 flex-1 w-full">
          {UP_NAV_LINKS.filter((link) =>
            link.allowedRoles.includes(user!.role as RoleType)
          ).map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="w-full cursor-pointer rounded-lg group hover:bg-LT-RED-100/70 duration-200 ease-in transition-bg"
            >
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center group-hover:text-yellow-400 ease duration-200 transition-all gap-4 ${
                    isActive ? "text-LT-YELLOW" : "text-white"
                  } font-normal w-full py-3 px-2`
                }
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
          <hr className="w-full text-white my-1" />

          {BOTTOM_NAV_LINKS_V2.filter((link) =>
            link.allowedRoles.includes(user!.role as RoleType)
          ).map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="w-full group py-3 px-2 rounded-lg hover:bg-LT-RED-100/70 duration-200 ease-in transition-bg"
            >
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center ${
                    isActive ? "text-LT-YELLOW" : "text-white"
                  } group-hover:text-yellow-400 ease duration-200 transition-all gap-4 font-normal w-full`
                }
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          className="bg-white w-full text-black"
          onClick={() => logout()}
        >
          Sair
        </Button>
      </div>
    </aside>
  );
}
