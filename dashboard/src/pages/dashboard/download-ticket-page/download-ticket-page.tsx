import { NavLink, Outlet } from "react-router-dom"
import { TICKET_FILTER_LINKS } from "@/constants/download-ticket"

const DownloadTicketPage = () => {
  return (
    <main className="w-full flex items-end justify-start min-h-screen flex-col gap-4">
      <div className="flex items-center gap-2 mt-4">
        <span>Filtrar por:</span>
        {TICKET_FILTER_LINKS.map((link, index) => (
          <NavLink
            key={index}
            to={link.link}
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive ? "bg-RED-200 text-white" : "bg-neutral-300"
              } rounded-md`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <Outlet />
    </main>
  )
}

export default DownloadTicketPage
