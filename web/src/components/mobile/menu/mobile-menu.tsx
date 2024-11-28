import Menu from "./menu"
import UI from "../../ui/button/index"
import { HiMenu } from "react-icons/hi"
import { MdClose } from "react-icons/md"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"

const MobileMenu = () => {
  const { pathname } = useLocation()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <div className="lg:hidden relative block">
      <UI.Button
        onClick={toggleMenu}
        className="text-LT_RED-200 hover:bg-none rounded-md px-2 py-0 text-base"
      >
        {isMenuOpen ? <MdClose size={24} /> : <HiMenu size={24} />}
      </UI.Button>

      <AnimatePresence mode="wait">{isMenuOpen && <Menu />}</AnimatePresence>
    </div>
  )
}

export default MobileMenu
