import { motion } from "framer-motion"
import Container from "../../common/container"
import { NavLink } from "react-router-dom"
import { NAVIGATION_LINKS } from "../../../constants/links"

const Menu = () => {
  return (
    <motion.div
      exit={{ height: "0px" }}
      initial={{ height: "0px" }}
      animate={{ height: "290px" }}
      className={
        "fixed z-[999] flex overflow-y-hidden items-center top-[90px] inset-0 bg-LT_RED-200 w-full"
      }
    >
      <Container className="flex-col items-start space-y-4">
        {NAVIGATION_LINKS.map((link) => (
          <NavLink
            reloadDocument
            key={link.id}
            to={link.link}
            className={({ isActive }) =>
              isActive
                ? "uppercase text-base text-yellow-500"
                : "uppercase text-base text-white"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </Container>
    </motion.div>
  )
}

export default Menu
