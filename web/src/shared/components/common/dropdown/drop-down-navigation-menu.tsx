import { NavLink } from "react-router-dom";
import { DROPDOWN_MENU } from "@/app/router/navigation";

import "./drop.down.navigation.menu.css";

const DropDownNavigationMenu = () => {
  return (
    <ul className="absolute flex flex-col gap-4 px-3 text-black dropdown-nav-menu top-[50px] right-0 transition-all duration-200 ease-in bg-white shadow-[0px_0px_12px_1px_rgba(0,0,0,0.1)] rounded-lg text-center w-[150px] h-auto py-4">
      {DROPDOWN_MENU.map((item) => (
        <li
          className={`${
            item.id !== 3 && "border-b border-b-zinc-300"
          } hover:text-LT_RED-100 text-sm uppercase transion-text duration-200 ease-in-out w-full py-1`}
        >
          <NavLink reloadDocument to={item.link} key={item.id}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DropDownNavigationMenu;
