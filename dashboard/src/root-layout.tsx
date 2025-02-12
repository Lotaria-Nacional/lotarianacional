// import LOGO from "/logo/white-logo.png"
import Header from "./components/common/header"
import { useAuth } from "./context/authContext"
import { Navigate, Outlet } from "react-router-dom"
import Container from "./components/common/container"
import Sidebar from "./components/common/sidebars/sidebar"
import MobileBottomBar from "./components/mobile/mobile-bottom-bar"

const RootLayout = () => {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      {/* <div className="w-full h-screen px-3 flex flex-col gap-10 items-center justify-center bg-RED-200 lg:hidden">
        <img
          src={LOGO}
          className="object-contain w-[160px]"
          alt="logotipo-lotarianacional"
        />
        <span className="text-white text-xl text-center">
          Disponível apenas em dispositivos desktop.
        </span>
      </div> */}

      <main className="lg:h-screen min-h-screen flex flex-col lg:flex-row">
        <Sidebar />

        <section className="bg-GRAY-100 w-full flex flex-col min-h-screen">
          <Header />
          <Container className="py-4 overflow-y-scroll">
            <Outlet />
          </Container>
        </section>

        <MobileBottomBar />
      </main>
    </>
  )
}

export default RootLayout
