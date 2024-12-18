import { Outlet } from "react-router-dom"
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import TopHeader from "./components/common/top-header"

const App = () => {
  return (
    <main className="w-full">
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
