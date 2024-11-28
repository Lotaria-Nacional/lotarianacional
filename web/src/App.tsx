import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import TopHeader from "./components/top-header"

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
