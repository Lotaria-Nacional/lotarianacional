import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetContent,
  SheetDescription,
} from "../ui/sheet"
import { Menu } from "lucide-react"
import { NavLink } from "react-router-dom"
import { SIDEBAR_BOTTOM_LINKS, SIDEBAR_MENU_LINKS } from "@/constants/sidebar"

const MobileMenuButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="block lg:hidden">
        <Menu className="text-white" size={32} />
      </SheetTrigger>
      <SheetContent className="bg-RED-200 border-none flex flex-col justify-start">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <nav>
            <ul className="flex flex-col gap-4">
              {SIDEBAR_MENU_LINKS.map((link) => (
                <li
                  key={link.id}
                  className="flex text-2xl border-b text-white items-center gap-2 h-[50px]"
                >
                  <img src={link.icon} alt="" />
                  <NavLink to={link.link}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col mt-4 gap-4">
              {SIDEBAR_BOTTOM_LINKS.map((link) => (
                <li
                  key={link.id}
                  className="flex text-2xl border-b text-white items-center gap-2 h-[50px] "
                >
                  <img src={link.icon} alt="" />
                  <NavLink to={link.link}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenuButton
