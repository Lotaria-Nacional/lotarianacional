import Menu from "./menu"
import { HiMenu } from "react-icons/hi"
import { MdClose } from "react-icons/md"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

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
      <button
        onClick={toggleMenu}
        className="text-white hover:bg-none text-4xl bg-transparent"
      >
        {isMenuOpen ? <MdClose /> : <HiMenu />}
      </button>

      <AnimatePresence mode="wait">{isMenuOpen && <Menu />}</AnimatePresence>
    </div>
  )
}

export default MobileMenu
