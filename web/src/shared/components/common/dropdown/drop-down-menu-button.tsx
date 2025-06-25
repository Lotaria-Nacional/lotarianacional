import { useState } from "react"
import { HiMenu } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import DropDownNavigationMenu from "./drop-down-navigation-menu"

const DropDownMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <div className="relative menu-container">
      <button
        onClick={handleToggleMenu}
        className="bg-white outline-none size-[32px] text-LT_RED-100 hover:scale-[0.97] transition-scale duration-300 ease rounded-md flex items-center justify-center"
      >
        {isOpen ? <IoClose size={22} /> : <HiMenu size={22} />}
      </button>
      {isOpen && <DropDownNavigationMenu />}
    </div>
  )
}

export default DropDownMenuButton
