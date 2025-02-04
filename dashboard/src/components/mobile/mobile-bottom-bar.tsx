import { Link } from "react-router-dom"
import Container from "../common/container"
import { EDITOR_SIDEBAR_MENU_LINKS } from "@/constants/sidebar"
import { Plus } from "lucide-react"

const MobileBottomBar = () => {
  return (
    <div className="w-full z-[1000] lg:hidden block bg-RED-100 sticky bottom-0 p-3">
      <Container className="relative">
        <button className="absolute top-[-90px] right-0 size-14 flex items-center justify-center rounded-full bg-RED-200 text-white">
          <Plus size={24}/>
        </button>

        <ul className="flex items-center justify-between">
          {EDITOR_SIDEBAR_MENU_LINKS.map((link, index) => (
            <li key={index} className="flex flex-col gap-1">
              <Link to={link.link}>
                <img src={link.icon} alt={link.label} className="size-8" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default MobileBottomBar
