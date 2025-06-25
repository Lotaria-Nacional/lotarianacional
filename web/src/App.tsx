import { Outlet } from "react-router-dom";
import Header from "./shared/components/layout/header";
import Footer from "./shared/components/layout/footer";
import { useModal } from "./app/context/modal-provider";
import TopHeader from "./shared/components/layout/top-header";
import CardEmission from "./features/emission/components/card-emission";

const App = () => {
  const { isModalOpen } = useModal();

  return (
    <main className="w-full min-h-screen flex flex-col">
      <TopHeader />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {isModalOpen && <CardEmission />}
    </main>
  );
};

export default App;
