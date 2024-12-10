import { Outlet } from "react-router-dom"
import Header from "./components/common/header"
import Sidebar from "./components/common/sidebar"
import Container from "./components/common/container"

const RootLayout = () => {
  return (
    <main className="h-screen flex flex-col lg:flex-row">
      <Sidebar />

      <section className="bg-GRAY-100 w-full flex flex-col min-h-screen">
        <Header />
        <Container className="py-4 overflow-y-auto">
          <Outlet />
        </Container>
      </section>
    </main>
  )
}

export default RootLayout
