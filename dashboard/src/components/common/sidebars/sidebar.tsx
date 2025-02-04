import AdminSidebar from "./admin-sidebar"
import EditorSidebar from "./editor-sidebar"
import StudioSidebar from "./studio-sidebar"
import { useAuth } from "@/context/authContext"

const enum USER_ROLE {
  ADMIN = "admin",
  EDITOR = "editor",
  STUDIO = "studio",
}
const Sidebar = () => {
  const { user } = useAuth()
  const userRole = user?.role

  return (
    <>
      {userRole === USER_ROLE.ADMIN ? (
        <AdminSidebar />
      ) : userRole === USER_ROLE.EDITOR ? (
        <EditorSidebar />
      ) : (
        <StudioSidebar />
      )}
    </>
  )
}

export default Sidebar
