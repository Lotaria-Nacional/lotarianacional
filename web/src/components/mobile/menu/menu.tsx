import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { MOBILE_NAVIGATION_LINKS } from "../../../constants/links"

const Menu = () => {
  return (
    <motion.ul
      exit={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0, opacity: 0 }}
      className="absolute rounded-lg bg-LT_RED-200 border border-LT_RED-100 flex flex-col gap-0 -bottom-[300px] -left-[180px] w-[220px] items-center justify-center"
    >
      {MOBILE_NAVIGATION_LINKS.map((link, index) => (
        <li
          key={index}
          className="w-full flex items-center h-full justify-center border border-white/20 py-4"
        >
          <NavLink
            reloadDocument
            key={link.id}
            to={link.link}
            className={({ isActive }) =>
              isActive
                ? "w-full text-center font-medium uppercase text-base text-yellow-400"
                : "w-full text-center font-medium uppercase text-base text-white"
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </motion.ul>
  )
}

export default Menu
