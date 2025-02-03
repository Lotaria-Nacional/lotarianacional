import { Outlet } from "react-router-dom"
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import { useModal } from "./context/modal-provider"
import TopHeader from "./components/common/top-header"
import CardEmission from "./components/emissoes/card-emission"

const App = () => {
  const { isModalOpen } = useModal()

  return (
    <main className="w-full">
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />

      {isModalOpen && <CardEmission />}
    </main>
  )
}

export default App
